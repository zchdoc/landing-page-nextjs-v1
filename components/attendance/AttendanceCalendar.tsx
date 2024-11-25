"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { AttendanceList } from "./AttendanceList";
import { useAttendance } from "@/hooks/use-attendance";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function AttendanceCalendar() {
  const [date, setDate] = useState<Date>(new Date());
  const { records, loading, error, userName } = useAttendance(date);
  console.info('records:',records);
  console.info('records-1:',JSON.stringify(records));
  const hasAttendance = (date: Date): boolean => {
    const formattedDate = format(date, "yyyy-MM-dd");
    
    const d = records.some(rs => 
      {
        //console.info('rs:',rs);
        return records.some(record => record.date === formattedDate);
      }
    );
    //console.info('d:',d);
    return d;
  };
  return (
    <div className="space-y-6">
      {userName && (
        <div className="text-sm text-muted-foreground">
          Viewing records for: <span className="font-medium">{userName}</span>
        </div>
      )}

      <Card className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => newDate && setDate(newDate)}
          className="rounded-md"
          modifiers={{
            hasAttendance: (date) => hasAttendance(date),
          }}
          modifiersStyles={{
            hasAttendance: {
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "2px",
                right: "2px",
                width: "8px",
                height: "8px",
                backgroundColor: "red",
                borderRadius: "50%",
              },
            },
          }}
        />
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">
          Attendance Records for {format(date, "MMMM d, yyyy")}
        </h2>

        {loading && (
          <div className="space-y-3">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!loading && !error && <AttendanceList records={records} />}
      </div>
    </div>
  );
}
