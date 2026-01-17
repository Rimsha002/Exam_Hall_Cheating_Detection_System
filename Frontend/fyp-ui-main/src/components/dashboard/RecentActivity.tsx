import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Smartphone, Eye, UserX } from "lucide-react";

const activities = [
  {
    icon: Users,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    title: "Multiple faces detected",
    description: "Student ID: ST-1847 • Exam: Mathematics Final",
    time: "2 minutes ago",
  },
  {
    icon: Smartphone,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
    title: "Mobile device detected",
    description: "Student ID: ST-2103 • Exam: Physics Midterm",
    time: "8 minutes ago",
  },
  {
    icon: Eye,
    iconBg: "bg-info/10",
    iconColor: "text-info",
    title: "Extended look away",
    description: "Student ID: ST-1592 • Exam: Chemistry Quiz",
    time: "15 minutes ago",
  },
  {
    icon: UserX,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
    title: "Face not visible",
    description: "Student ID: ST-2456 • Exam: Biology Test",
    time: "23 minutes ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="shadow-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`rounded-lg p-2 ${activity.iconBg}`}>
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
