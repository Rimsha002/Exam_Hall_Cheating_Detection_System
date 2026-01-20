import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, FileText, AlertCircle, UserPlus, Settings } from "lucide-react";



export default function ExamSetup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
  exam_name: "",
  exam_code: "",
  description: "",
  exam_date: "",
  start_time: "",
  end_time: "",
  duration: "",
  room: "",
  max_students: ""
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({
    ...form,
    [e.target.id]: e.target.value
  });
};

const handleSubmit = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/admin/exams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        exam_name: form.exam_name,
        exam_code: form.exam_code,
        description: form.description,
        exam_date: form.exam_date,
        start_time: form.start_time,
        end_time: form.end_time,
        duration: Number(form.duration),
        room: form.room,
        max_students: Number(form.max_students)
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail || "Failed to create exam");
      return;
    }

    alert(" Exam created successfully!");
  } catch (err) {
    alert(" Server error");
  }
};

const handleReset = () => {
  setForm({
    exam_name: "",
    exam_code: "",
    description: "",
    exam_date: "",
    start_time: "",
    end_time: "",
    duration: "",
    room: "",
    max_students: ""
  });
};

const handleCancel = () => {
  navigate("/dashboard"); // Assuming dashboard is the main page
};



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
                  <Input
                   id="exam_name"
                   placeholder="e.g., Mathematics Final Exam"
                    value={form.exam_name}
                    onChange={handleChange}
                    />

                  
                </div>
                <div className="space-y-2">
                  <Label htmlFor="examCode">Exam Code</Label>
                  <Input
  id="exam_code"
  placeholder="e.g., MT101"
  value={form.exam_code}
  onChange={handleChange}
/>

                  
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter exam description and instructions..."
                  rows={4}
                  value={form.description}
                   onChange={handleChange}
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
                  <Input id="exam_date" type="date" value={form.exam_date} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="e.g., 120" value={form.duration} onChange={handleChange} />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input id="start_time" type="time" value={form.start_time} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input id="end_time" type="time" value={form.end_time} onChange={handleChange} />
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
                  <Input id="room" placeholder="e.g., Room A, Building 3" value={form.room} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxStudents">Maximum Students</Label>
                  <Input id="max_students" type="number" placeholder="e.g., 50" value={form.max_students} onChange={handleChange} />
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
              <Button className="btn-glow" onClick={handleSubmit}>
                <FileText className="mr-2 h-4 w-4" />
                Create Exam
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Reset Form
              </Button>
              <Button variant="outline" className="text-destructive hover:text-destructive" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
