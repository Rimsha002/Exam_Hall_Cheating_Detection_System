import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserPlus, Upload, Download, Search, Eye, Pencil, Trash2 } from "lucide-react";

const students = [
  {
    id: "ST-1847",
    name: "John Doe",
    initials: "JD",
    email: "john.doe@university.edu",
    enrolledExams: 8,
    lastExam: "Dec 15, 2024",
    status: "Active",
  },
  {
    id: "ST-2103",
    name: "Sarah Smith",
    initials: "SS",
    email: "sarah.smith@university.edu",
    enrolledExams: 6,
    lastExam: "Dec 14, 2024",
    status: "Active",
  },
  {
    id: "ST-1592",
    name: "Mike Johnson",
    initials: "MJ",
    email: "mike.johnson@university.edu",
    enrolledExams: 7,
    lastExam: "Dec 13, 2024",
    status: "Active",
  },
  {
    id: "ST-2456",
    name: "Emma Wilson",
    initials: "EW",
    email: "emma.wilson@university.edu",
    enrolledExams: 5,
    lastExam: "Dec 12, 2024",
    status: "Inactive",
  },
  {
    id: "ST-1734",
    name: "David Brown",
    initials: "DB",
    email: "david.brown@university.edu",
    enrolledExams: 9,
    lastExam: "Dec 15, 2024",
    status: "Active",
  },
];

export default function Students() {
  return (
    <DashboardLayout title="Students Management">
      <Card className="shadow-card">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button className="btn-glow">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Student
              </Button>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Import CSV
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-9 w-full sm:w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Enrolled Exams</TableHead>
                  <TableHead>Last Exam</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 bg-primary">
                          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            {student.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{student.email}</TableCell>
                    <TableCell className="text-center">{student.enrolledExams}</TableCell>
                    <TableCell className="text-muted-foreground">{student.lastExam}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          student.status === "Active"
                            ? "bg-success/10 text-success border-success/30"
                            : "bg-muted text-muted-foreground"
                        }
                        variant="outline"
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="sm" className="text-info hover:text-info">
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
