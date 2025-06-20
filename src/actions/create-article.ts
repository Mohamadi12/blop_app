"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const createArticleSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(50),
  content: z.string().min(10),
});

type CreateArticleFormState = {
  errors: {
    title?: string[];
    category?: string[];
    featuredImage?: string[];
    content?: string[];
    formErrors?: string[];
  };
};

export const createArticles = async (
  prevState: CreateArticleFormState,
  formData: FormData
): Promise<CreateArticleFormState> => {
  const result = createArticleSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // ✅ Fix: Get Clerk User ID and check authentication
  const { userId } = await auth();
  
  // If userId is not available, return an error
  if (!userId) {
    return {
      errors: {
        formErrors: ["You must be logged in to create an article."],
      },
    };
  }

  // Start creating article
  redirect("/dashboard");
};
