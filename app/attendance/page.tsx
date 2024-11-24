import { AttendanceCalendar } from "@/components/attendance/AttendanceCalendar";

export default function AttendancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Attendance Records</h1>
          <p className="text-muted-foreground">
            View and track your attendance records by date
          </p>
        </div>
        
        <AttendanceCalendar />
      </div>
    </div>
  );
}