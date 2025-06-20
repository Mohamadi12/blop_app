import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import Link from "next/link";

const RecentArticles = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Articles</CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All →
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>
                <Badge className="rounded-full bg-green-100 text-green-800">
                  Published
                </Badge>
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>12 feb</TableCell>
              <TableCell>
                <div>
                  <Link href={`/dashboard/articles/${123}/edit`}>
                    <Button variant={"ghost"} size={"sm"}>
                      Edit
                    </Button>
                  </Link>
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentArticles;

const DeleteButton = () => {
  return (
    <form>
      <Button variant={"ghost"} size={"sm"} type="submit">
        Delete
      </Button>
    </form>
  );
};
