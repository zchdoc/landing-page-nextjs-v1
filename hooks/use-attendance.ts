"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export interface AttendanceRecord {
  id: number;
  date: string;
  time: string;
  signInStateStr: string;
  signInState: string;
  beLateTime: string;
  thanTheWay: string;
  commuterTimeName: string;
  signInType: number;
  userName?: string;
}

export function useAttendance(date: Date) {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      setLoading(true);
      setError(null);

      try {
        const beginOfMonth = format(
          new Date(date.getFullYear(), date.getMonth(), 1),
          "yyyy-MM-dd HH:mm:ss"
        );
        const endOfMonth = format(
          new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59),
          "yyyy-MM-dd HH:mm:ss"
        );

        const queryParams = new URLSearchParams({
          userNo: '3000002',
          timeStart: beginOfMonth,
          timeEnd: endOfMonth,
          openId: 'o45LO4l28n6aa4dFCXB3BBYOFWNs',
          userVerifyNumber: '15824821718',
        }).toString();

        const response = await fetch(`/api/attendance?${queryParams}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.info('data:',response);
        console.info('data:',response.formData);
        const data = await response.json();
        
        if (!data || data.length === 0) {
          setRecords([]);
          return;
        }

        // Set username from the first record if available
        if (data[0]?.[0]?.userName) {
          setUserName(data[0][0].userName);
        }

        // Flatten the nested array structure and filter for the selected date
        const selectedDate = format(date, 'yyyy-MM-dd');
        const dayRecords = data.find((dayGroup: AttendanceRecord[]) => 
          dayGroup.some(record => record.date === selectedDate)
        ) || [];

        setRecords(dayRecords);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch attendance records');
        setRecords([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceRecords();
  }, [date]);

  return { records, loading, error, userName };
}