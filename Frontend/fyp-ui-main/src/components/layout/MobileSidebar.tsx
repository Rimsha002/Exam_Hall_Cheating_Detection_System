import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Video,
  ClipboardList,
  PlayCircle,
  MessageSquare,
  Users,
  FileText,
  Settings,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Live Monitoring", icon: Video, href: "/live-monitoring" },
  { label: "Exam Setup", icon: ClipboardList, href: "/exam-setup" },
];

const analysisNavItems = [
  { label: "Recorded Sessions", icon: PlayCircle, href: "/recorded-sessions" },
  { label: "Chat Analysis", icon: MessageSquare, href: "/chat-analysis" },
];

const managementNavItems = [
  { label: "Students", icon: Users, href: "/students" },
  { label: "Reports", icon: FileText, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function MobileSidebar() {
  const location = useLocation();

  const NavItem = ({ item }: { item: typeof mainNavItems[0] }) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        to={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
          isActive
            ? "bg-sidebar-accent text-sidebar-primary font-medium"
            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
        )}
      >
        <item.icon className="h-5 w-5" />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="flex h-full flex-col sidebar-gradient">
      {/* Logo Section */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <GraduationCap className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-sidebar-foreground">
            Exam Monitoring
          </span>
          <span className="text-xs text-sidebar-foreground/60">
            System
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <div className="mb-4">
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-muted">
            Main
          </p>
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-muted">
            Analysis
          </p>
          <div className="space-y-1">
            {analysisNavItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-sidebar-muted">
            Management
          </p>
          <div className="space-y-1">
            {managementNavItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
