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
import {
  UserPlus,
  Upload,
  Download,
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Students() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");

  type Student = {
  id: number;
  student_id: string;
  name: string;
  email: string;
  enrolled_exams: number;
  last_exam: string | null;
};

const fetchStudents = async () => {
  try {
    const res = await fetch("http://localhost:8000/students");
    if (!res.ok) return [];

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};
useEffect(() => {
  fetchStudents().then(setStudents);
}, []);


  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()),
  );
  const deleteStudent = async (id) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`http://localhost:8000/admin/students/${id}`, {
      method: "DELETE",
    });
    alert("Student deleted successfully.");

    const updatedStudents = await fetchStudents();
    setStudents(updatedStudents);
  };

  return (
    <DashboardLayout title="Students Management">
      <Card className="shadow-card">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => navigate("/students/add")}>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Student
              </Button>

              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Import CSV
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("http://localhost:8000/admin/students/export")
                }
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 bg-primary">
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((w) => w[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">
                            {student.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {student.student_id}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {student.email}
                    </TableCell>
                    <TableCell className="text-center">
                      {student.enrolled_exams}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {student.last_exam ?? "—"}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          onClick={() => navigate(`/students/${student.id}`)}
                        >
                          View
                        </Button>

                        <Button
                          onClick={() =>
                            navigate(`/students/edit/${student.id}`)
                          }
                        >
                          Edit
                        </Button>

                        <Button onClick={() => deleteStudent(student.id)}>
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
