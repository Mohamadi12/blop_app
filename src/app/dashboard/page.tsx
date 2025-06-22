import BlogDashboard from "@/components/dashboard/blog-dashboard";
import { Suspense } from "react";
import DashboardLoadingScreen from "./laoding";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const user = await currentUser();

  if (
    !user ||
    user.emailAddresses[0].emailAddress !== "dalizeta368@gmail.com"
  ) {
    redirect("/");
  }
  return (
    <div>
      <Suspense fallback={<DashboardLoadingScreen />}>
        <BlogDashboard />
      </Suspense>
    </div>
  );
};

export default Dashboard;
