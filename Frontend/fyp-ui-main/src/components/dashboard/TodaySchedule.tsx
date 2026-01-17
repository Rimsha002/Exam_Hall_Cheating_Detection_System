import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin } from "lucide-react";

const exams = [
  {
    name: "Mathematics Final",
    time: "9:00 AM - 11:30 AM",
    students: 64,
    rooms: "Room A, B, C",
    status: "Live" as const,
  },
  {
    name: "Physics Midterm",
    time: "1:00 PM - 2:30 PM",
    students: 42,
    rooms: "Room D, E",
    status: "Upcoming" as const,
  },
  {
    name: "Chemistry Quiz",
    time: "3:30 PM - 4:30 PM",
    students: 38,
    rooms: "Room A, F",
    status: "Upcoming" as const,
  },
  {
    name: "Biology Test",
    time: "8:00 AM - 9:00 AM",
    students: 28,
    rooms: "Room B",
    status: "Completed" as const,
  },
];

const statusStyles = {
  Live: "bg-success text-success-foreground",
  Upcoming: "bg-info text-info-foreground",
  Completed: "bg-muted text-muted-foreground",
};

export function TodaySchedule() {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Today's Exam Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="rounded-lg border border-border p-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-foreground">{exam.name}</h4>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {exam.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {exam.students} students
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exam.rooms}
                    </span>
                  </div>
                </div>
                <Badge className={statusStyles[exam.status]}>
                  {exam.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
