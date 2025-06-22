import BlogDashboard from "@/components/dashboard/blog-dashboard";
import { Suspense } from "react";
import DashboardLoadingScreen from "./laoding";

const Dashboard = () => {
  return (
    <div>
      <Suspense fallback={<DashboardLoadingScreen />}>
        <BlogDashboard />
      </Suspense>
    </div>
  );
};

export default Dashboard;
