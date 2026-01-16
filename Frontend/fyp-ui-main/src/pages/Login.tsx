import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, User, Shield } from "lucide-react";



type UserRole = "admin" | "invigilator";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();

    if (!response.ok) {
      // response.ok false hone par yahi alert dikhana
      alert(data.detail || "Login failed");
      return;
    }

    console.log("Login Success:", data);
    navigate("/dashboard");
  } catch (err: unknown) {
    // TypeScript safe handling
    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert("Backend not reachable");
    }
  }
};



  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Login Card */}
        <div className="rounded-2xl bg-card p-8 shadow-lg">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-glow">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              Exam Monitoring System
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Welcome back! Please sign in to continue
            </p>
          </div>

          {/* Role Toggle */}
          <div className="mb-6 flex rounded-lg border border-border p-1">
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-all",
                role === "admin"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Shield className="h-4 w-4" />
              Admin
            </button>
            <button
              type="button"
              onClick={() => setRole("invigilator")}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-all",
                role === "invigilator"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <User className="h-4 w-4" />
              Invigilator
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email} // optional: rename variable later
                onChange={(e) => setEmail(e.target.value)} // ya 'setEmail' agar variable rename karogi
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-11 btn-glow text-base bg-gradient-to-r from-indigo-500 to-purple-600 font-medium"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
