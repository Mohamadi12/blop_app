"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
import { useState, useActionState, startTransition } from "react";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "../ui/button";
import { createArticles } from "@/actions/create-article";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreateArticlesPage = () => {
  const [value, setValue] = useState("");

  const [formState, action, isPending] = useActionState(createArticles, {
    errors: {},
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("content", value);

    // Wrap the action call in startTransition
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                name="title"
                placeholder="Enter a articles title"
              />
              {formState.errors.title && (
                <span className="text-red-600 text-sm">
                  {formState.errors.title}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <select
                name="category"
                id="category"
                className="flex h-10 w-full dark:bg-gray-900 rounded-md text-muted-foreground"
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="programming">Programming</option>
                <option value="web-development">Web development</option>
              </select>
              {formState.errors.category && (
                <span className="text-red-600 text-sm">
                  {formState.errors.category}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="featured-image">Featured Image</Label>
              <Input
                type="file"
                id="featuredImage"
                name="featuredImage"
                accept="image/*"
              />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill theme="snow" value={value} onChange={setValue} />
              {formState.errors.content && (
                <span className="text-red-600 text-sm">
                  {formState.errors.content[0]}
                </span>
              )}
            </div>
            <div className="flex justify-end gap-4">
              <Button variant={"outline"}>Cancel</Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Loading..." : "Publish Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticlesPage;
