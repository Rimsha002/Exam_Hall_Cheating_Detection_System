import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { SystemPerformanceChart } from "@/components/dashboard/SystemPerformanceChart";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TodaySchedule } from "@/components/dashboard/TodaySchedule";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Cards */}
        <StatsCards />

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* System Performance - Takes 2 columns */}
          <div className="lg:col-span-2">
            <SystemPerformanceChart />
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <RecentActivity />

          {/* Today's Schedule */}
          <TodaySchedule />
        </div>
      </div>
    </DashboardLayout>
  );
}
