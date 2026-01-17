import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle, Camera, Cpu } from "lucide-react";

const alerts = [
  {
    type: "Multiple Faces Detected",
    severity: "HIGH",
    student: "John Doe (ST-1847)",
    time: "2 minutes ago • 14:23:45",
  },
  {
    type: "Mobile Phone Detected",
    severity: "MEDIUM",
    student: "Sarah Smith (ST-2103)",
    time: "8 minutes ago • 14:17:32",
  },
  {
    type: "Looking Away",
    severity: "LOW",
    student: "Mike Johnson (ST-1592)",
    time: "15 minutes ago • 14:10:18",
  },
  {
    type: "Face Not Visible",
    severity: "HIGH",
    student: "Emma Wilson (ST-2456)",
    time: "23 minutes ago • 14:02:54",
  },
  {
    type: "Excessive Movement",
    severity: "MEDIUM",
    student: "David Brown (ST-1734)",
    time: "30 minutes ago • 13:55:41",
  },
];

const severityStyles = {
  HIGH: "bg-destructive text-destructive-foreground",
  MEDIUM: "bg-warning text-warning-foreground",
  LOW: "bg-info text-info-foreground",
};

export default function LiveMonitoring() {
  return (
    <DashboardLayout title="Live Monitoring">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Camera Feed - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card className="shadow-card overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between bg-sidebar text-sidebar-foreground">
              <CardTitle className="text-lg font-semibold">
                Live Camera Feed - Room A
              </CardTitle>
              <Badge className="bg-success text-success-foreground animate-pulse">
                LIVE
              </Badge>
            </CardHeader>
            <CardContent className="p-0">
              {/* Detection Status Bar */}
              <div className="flex flex-wrap gap-2 bg-sidebar p-3">
                <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                  <Check className="mr-1 h-3 w-3" />
                  Face Detected
                </Badge>
                <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  Head Angle: 18° Right
                </Badge>
                <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                  <Check className="mr-1 h-3 w-3" />
                  No Phone Detected
                </Badge>
              </div>

              {/* Camera Preview Area */}
              <div className="relative aspect-video bg-sidebar flex items-center justify-center">
                <div className="text-center">
                  <Camera className="mx-auto h-16 w-16 text-sidebar-muted" />
                  <p className="mt-4 text-sm text-sidebar-foreground">Camera Feed Active</p>
                  <p className="text-xs text-sidebar-muted">AI Detection Model Running</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Alerts Panel */}
        <div className="lg:col-span-1">
          <Card className="shadow-card h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Live Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-4 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground text-sm">
                        {alert.type}
                      </h4>
                      <Badge className={severityStyles[alert.severity as keyof typeof severityStyles]}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{alert.student}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
