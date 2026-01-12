import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GraduationCap, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type UserRole = "admin" | "invigilator";

export default function Signup() {
    const navigate = useNavigate();

    const [role, setRole] = useState<UserRole>("invigilator");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation (can be extended later)
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // TODO: Send data to backend API
        console.log({
            username,
            email,
            phone,
            password,
            role,
        });

        // Navigate to login after signup
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-4">
            <div className="w-full max-w-md animate-fade-in">
                <div className="rounded-2xl bg-card p-8 shadow-lg">

                    {/* Logo */}
                    <div className="mb-6 flex flex-col items-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-glow">
                            <GraduationCap className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h1 className="text-xl font-bold text-foreground">
                            Create Account
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Join now to get started
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
                                    : "text-muted-foreground hover:text-foreground"
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
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <User className="h-4 w-4" />
                            Invigilator
                        </button>
                    </div>

                    {/* Sign Up Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Create Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="h-11"
                            />
                        </div>

                        <Button type="submit" className="w-full h-11 btn-glow text-base bg-gradient-to-r from-indigo-500 to-purple-600">
                            Sign Up
                        </Button>
                    </form>

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary font-medium hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
