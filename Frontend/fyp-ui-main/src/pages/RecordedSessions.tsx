import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, MessageSquare, FileText, Download, File, Clock, MapPin, HardDrive } from "lucide-react";

const sessions = [
  {
    title: "Mathematics Final - ST-1847 (John Doe)",
    date: "Dec 15, 2024",
    time: "9:00 AM - 11:30 AM",
    duration: "2h 30m",
    room: "Room A",
    size: "1.2 GB",
    deletesIn: "Deletes in 12h 20m",
  },
  {
    title: "Physics Midterm - ST-2103 (Sarah Smith)",
    date: "Dec 14, 2024",
    time: "1:00 PM - 2:30 PM",
    duration: "1h 30m",
    room: "Room D",
    size: "850 MB",
    deletesIn: "Deletes in 8h 15m",
  },
  {
    title: "Chemistry Quiz - ST-1592 (Mike Johnson)",
    date: "Dec 13, 2024",
    time: "3:30 PM - 4:30 PM",
    duration: "1h 00m",
    room: "Room A",
    size: "620 MB",
    deletesIn: "Deletes in 4h 30m",
  },
  {
    title: "Biology Test - ST-2456 (Emma Wilson)",
    date: "Dec 12, 2024",
    time: "8:00 AM - 9:00 AM",
    duration: "1h 00m",
    room: "Room B",
    size: "580 MB",
    deletesIn: "Deletes in 2h 45m",
  },
];

export default function RecordedSessions() {
  return (
    <DashboardLayout title="Recorded Sessions">
      <div className="space-y-4">
        {sessions.map((session, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-foreground">{session.title}</h3>
                    <Badge variant="outline" className="text-warning border-warning/30 lg:hidden">
                      {session.deletesIn}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {session.date}
                    </span>
                    <span>{session.time}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {session.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {session.room}
                    </span>
                    <span className="flex items-center gap-1">
                      <HardDrive className="h-3.5 w-3.5" />
                      {session.size}
                    </span>
                  </div>
                </div>

                <Badge variant="outline" className="hidden lg:flex text-warning border-warning/30">
                  {session.deletesIn}
                </Badge>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="sm" className="btn-glow">
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Play Recording
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="mr-2 h-3.5 w-3.5" />
                  Chat Analysis
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="mr-2 h-3.5 w-3.5" />
                  View Report
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Export (Video + Logs)
                </Button>
                <Button size="sm" variant="outline">
                  <File className="mr-2 h-3.5 w-3.5" />
                  Export Logs Only
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
