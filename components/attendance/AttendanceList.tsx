"use client";

import { AttendanceRecord } from "@/lib/attendance";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Fingerprint } from "lucide-react";

interface AttendanceListProps {
  records: AttendanceRecord[];
}

export function AttendanceList({ records }: AttendanceListProps) {
  if (!records || records.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-4">
        No attendance records for this date
      </div>
    );
  }

  const getStateColor = (state: string) => {
    switch (state) {
      case "正常签到":
        return "bg-green-500";
      case "迟到":
        return "bg-yellow-500";
      case "加班":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      {records.map((record) => (
        <Card key={record.id} className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getStateColor(record.signInStateStr)}>
                  {record.signInStateStr}
                </Badge>
                <span className="text-sm font-medium">{record.commuterTimeName}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{record.time}</span>
                {record.beLateTime !== "0" && (
                  <span className="text-sm text-yellow-500">({record.beLateTime})</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Fingerprint className="h-4 w-4" />
                <span className="text-sm">{record.thanTheWay}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}