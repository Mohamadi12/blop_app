import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentArticles from "./recent-articles";

const BlogDashboard = () => {
  return (
    <div className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p>Manage your content and analytics</p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button>
            <PlusCircle className="h-4 w-4" />
            New Article
          </Button>
        </Link>
      </div>

      {/* Quicks start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row space-y-0 pb-2 items-center justify-between">
            <CardTitle>Total Articles</CardTitle>
            <FileText className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100</div>
            <p className="text-sm text-muted-foreground mt-1">+5 form last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row space-y-0 pb-2 items-center justify-between">
            <CardTitle>Total Comments</CardTitle>
            <MessageCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-sm text-muted-foreground mt-1">12 awaiting moderation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row space-y-0 pb-2 items-center justify-between">
            <CardTitle>Avg. Rating Time</CardTitle>
            <MessageCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-sm text-muted-foreground mt-1">0.6 from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <RecentArticles />
      </div>
    </div>
  );
};

export default BlogDashboard;
