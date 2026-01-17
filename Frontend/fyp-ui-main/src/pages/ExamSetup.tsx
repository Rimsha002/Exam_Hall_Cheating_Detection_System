import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, FileText, AlertCircle, UserPlus, Settings } from "lucide-react";

export default function ExamSetup() {
  return (
    <DashboardLayout title="Exam Setup">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold">Create New Exam</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <FileText className="h-4 w-4 text-primary" />
                Basic Information
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="examName">Exam Name</Label>
                  <Input id="examName" placeholder="e.g., Mathematics Final Exam" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="examCode">Exam Code</Label>
                  <Input id="examCode" placeholder="e.g., MATH-301-F24" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter exam description and instructions..."
                  rows={4}
                />
              </div>
            </div>

            {/* Schedule Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Calendar className="h-4 w-4 text-primary" />
                Schedule
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="examDate">Exam Date</Label>
                  <Input id="examDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="e.g., 120" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input id="startTime" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input id="endTime" type="time" />
                </div>
              </div>
            </div>

            {/* Monitoring Configuration Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <MapPin className="h-4 w-4 text-primary" />
                Monitoring Configuration
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="room">Room/Location</Label>
                  <Input id="room" placeholder="e.g., Room A, Building 3" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxStudents">Maximum Students</Label>
                  <Input id="maxStudents" type="number" placeholder="e.g., 50" />
                </div>
              </div>
            </div>

            {/* Auto-Delete Policy Notice */}
            <div className="rounded-lg border border-warning/30 bg-warning/5 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Auto-Delete Policy</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    All recordings will be automatically deleted after 24 hours for privacy and storage management.
                    Export data to USB or external storage if longer retention is needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="btn-glow">
                <FileText className="mr-2 h-4 w-4" />
                Create Exam
              </Button>
              <Button variant="outline">
                Reset Form
              </Button>
              <Button variant="outline" className="text-destructive hover:text-destructive">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
