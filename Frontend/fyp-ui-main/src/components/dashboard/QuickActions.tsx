import { useNavigate } from "react-router-dom";
import { Video, UserPlus, FileText, Settings, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card className="shadow-card h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          className="w-full justify-start gap-3 btn-glow"
          onClick={() => navigate("/live-monitoring")}
        >
          <Video className="h-4 w-4" />
          Start Monitoring
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-3"
          onClick={() => navigate("/students")}
        >
          <UserPlus className="h-4 w-4" />
          Add Student
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-3"
          onClick={() => navigate("/reports")}
        >
          <FileText className="h-4 w-4" />
          Generate Report
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start gap-3"
          onClick={() => navigate("/settings")}
        >
          <Settings className="h-4 w-4" />
          System Settings
        </Button>

        {/* System Tip */}
        <div className="mt-4 rounded-lg bg-accent p-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">System Tip</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Enable auto-alerts to get notified instantly when suspicious activity is detected during exams.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
