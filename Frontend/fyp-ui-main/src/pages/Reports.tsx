import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Mail, Eye, AlertTriangle, Smartphone, Users, EyeOff, Clock } from "lucide-react";

const reports = [
  {
    student: "John Doe - ST-1847",
    exam: "Mathematics Final Exam",
    date: "Dec 15, 2024",
    duration: "2h 30m",
    riskScore: 89,
    incidents: {
      total: 28,
      lookingAway: 15,
      phoneDetected: 4,
      multipleFaces: 3,
      faceNotVisible: 6,
    },
  },
  {
    student: "Sarah Smith - ST-2103",
    exam: "Physics Midterm",
    date: "Dec 14, 2024",
    duration: "1h 45m",
    riskScore: 52,
    incidents: {
      total: 12,
      lookingAway: 8,
      phoneDetected: 1,
      multipleFaces: 0,
      faceNotVisible: 3,
    },
  },
];

export default function Reports() {
  return (
    <DashboardLayout title="Reports & Analytics">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground">Exam Reports & Analytics</h2>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download All
            </Button>
            <Button className="btn-glow">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Report Cards */}
        {reports.map((report, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{report.student}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {report.exam} • {report.date} • {report.duration}
                      </p>
                    </div>
                    <Badge
                      className={
                        report.riskScore >= 70
                          ? "bg-destructive text-destructive-foreground"
                          : report.riskScore >= 40
                          ? "bg-warning text-warning-foreground"
                          : "bg-success text-success-foreground"
                      }
                    >
                      Risk Score: {report.riskScore}%
                    </Badge>
                  </div>

                  {/* Incident Stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xs text-muted-foreground">Total Incidents</p>
                      <p className="text-2xl font-bold text-primary mt-1">{report.incidents.total}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xs text-muted-foreground">Looking Away</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{report.incidents.lookingAway}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xs text-muted-foreground">Phone Detected</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{report.incidents.phoneDetected}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xs text-muted-foreground">Multiple Faces</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{report.incidents.multipleFaces}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xs text-muted-foreground">Face Not Visible</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{report.incidents.faceNotVisible}</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary">
                      <p className="text-xs text-muted-foreground">Exam Duration</p>
                      <p className="text-2xl font-bold text-success mt-1">{report.duration}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button className="btn-glow">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      View Evidence
                    </Button>
                    <Button variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
