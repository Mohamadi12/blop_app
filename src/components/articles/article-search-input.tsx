"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { searchAction } from "@/actions/search"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const ArticleSearchInputContent = () => {
  const searchParams = useSearchParams()
  const searchText = searchParams.get("search") || ""

  return (
    <Input
      type="text"
      name="search"
      defaultValue={searchText}
      placeholder="Search articles..."
      className="w-full pl-10 pr-4 py-6 text-lg"
    />
  )
}

export const ArticleSearchInput = () => {
  return (
    <form action={searchAction} className="mx-auto max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Suspense fallback={
          <Input 
            placeholder="Loading..." 
            className="w-full pl-10 pr-4 py-6 text-lg" 
            disabled 
          />
        }>
          <ArticleSearchInputContent />
        </Suspense>
      </div>
    </form>
  )
}