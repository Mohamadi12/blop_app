"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="hidden m-4">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[250px]">
          <DashboardSidebar />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block w-[250px] h-screen border-r bg-background">
        <DashboardSidebar />
      </div>
    </div>
  );
};

export default LeftSidebar;

const DashboardSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
          <span className="text-xl font-bold">NanaCode</span>
        </Link>
      </div>
      <nav>
        <Link href={"/dashboard"}>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <LayoutDashboard className="h-5 w-5" />
            Overview
          </Button>
        </Link>
        <Link href={"/dashboard/articles/create"}>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <FileText className="h-5 w-5" />
            Articles
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <MessageCircle className="h-5 w-5" />
            Comments
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <BarChart className="h-5 w-5" />
            Analytics
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  );
};
