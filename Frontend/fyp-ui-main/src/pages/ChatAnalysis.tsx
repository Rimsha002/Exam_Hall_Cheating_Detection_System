import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Pause, SkipBack, SkipForward, Send, Bot, User } from "lucide-react";

const chatHistory = [
  {
    role: "system",
    content: "Welcome to the chat analysis interface. You can ask questions about this exam session, and I'll provide insights based on the log data. Try asking about specific timestamps or incidents.",
    time: "9:00 AM",
  },
  {
    role: "admin",
    content: "What happened at 9:45 AM during this exam?",
    time: "2:15 PM",
  },
  {
    role: "system",
    content: "At 9:45 AM, the system detected multiple faces in the camera frame for approximately 12 seconds. This triggered a HIGH severity alert. The student's head movement also increased significantly during this period.",
    time: "2:15 PM",
    logEntry: {
      timestamp: "09:45:18",
      alert: "Multiple faces detected",
      duration: "12s",
      confidence: "94%",
      student: "ST-1847",
    },
  },
  {
    role: "admin",
    content: "Were there any phone detection alerts?",
    time: "2:16 PM",
  },
];

export default function ChatAnalysis() {
  return (
    <DashboardLayout title="Chat Analysis">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Video Player Section */}
        <Card className="shadow-card">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Exam Recording</CardTitle>
              <div className="text-sm text-muted-foreground">
                <p>Emma Wilson - Biology</p>
                <p className="text-xs">Dec 12, 2024</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Video Preview Area */}
            <div className="aspect-video bg-sidebar rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="mx-auto h-16 w-16 text-sidebar-foreground" />
                <p className="mt-4 text-sm text-sidebar-foreground">Click play to start playback</p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="mt-4 space-y-3">
              {/* Progress Bar */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-16">00:52:30</span>
                <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
                <span className="text-xs text-muted-foreground w-16 text-right">02:30:00</span>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-2">
                <Button variant="ghost" size="icon">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button size="icon" className="h-10 w-10 rounded-full">
                  <Play className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Section */}
        <Card className="shadow-card flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Log Analysis Chat</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px] mb-4">
              {chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === "admin" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className={`h-8 w-8 ${message.role === "system" ? "bg-primary" : "bg-primary"}`}>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {message.role === "system" ? <Bot className="h-4 w-4" /> : "AD"}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "admin"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.logEntry && (
                      <div className="mt-2 rounded bg-card/50 p-2 text-xs">
                        <p className="font-mono text-muted-foreground">
                          Log Entry [{message.logEntry.timestamp}]
                        </p>
                        <p className="mt-1 text-destructive font-medium">
                          ALERT: {message.logEntry.alert} | Duration: {message.logEntry.duration} | Confidence: {message.logEntry.confidence} | Student: {message.logEntry.student}
                        </p>
                      </div>
                    )}
                    <p className={`text-xs mt-1 ${message.role === "admin" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {message.role === "system" ? "System Assistant" : "Admin"} • {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex gap-2">
              <Input placeholder="Ask about this exam session..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
