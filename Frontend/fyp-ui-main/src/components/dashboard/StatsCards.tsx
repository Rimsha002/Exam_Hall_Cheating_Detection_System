import { Users, AlertTriangle, Camera, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "Active Students",
    value: "248",
    change: "↑ 12% from last week",
    changeType: "positive" as const,
    icon: Users,
    iconBg: "bg-info/10",
    iconColor: "text-info",
  },
  {
    title: "Alerts Today",
    value: "37",
    change: "8 high priority",
    changeType: "warning" as const,
    icon: AlertTriangle,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
  {
    title: "Active Cameras",
    value: "12/12",
    change: "All operational",
    changeType: "positive" as const,
    icon: Camera,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    title: "Detection Accuracy",
    value: "98.7%",
    change: "↑ 1.2% improvement",
    changeType: "positive" as const,
    icon: Shield,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6 shadow-card animate-slide-up">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <p className="mt-2 text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p
                className={`mt-1 text-xs ${
                  stat.changeType === "positive"
                    ? "text-success"
                    : stat.changeType === "warning"
                    ? "text-warning"
                    : "text-muted-foreground"
                }`}
              >
                {stat.change}
              </p>
            </div>
            <div className={`rounded-lg p-3 ${stat.iconBg}`}>
              <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
