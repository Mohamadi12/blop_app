"use client"

import { searchAction } from "@/actions/search"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const SearchInputContent = () => {
  const params = useSearchParams()

  return (
    <Input
      type="search"
      name="search"
      defaultValue={params.get("search") || ""}
      placeholder="Search articles..."
      className="pl-10 w-48 focus-visible:ring-1"
    />
  )
}

export const SearchInput = () => {
  return (
    <form action={searchAction}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Suspense fallback={
          <Input 
            className="pl-10 w-48" 
            placeholder="Loading..." 
            disabled 
          />
        }>
          <SearchInputContent />
        </Suspense>
      </div>
    </form>
  )
}