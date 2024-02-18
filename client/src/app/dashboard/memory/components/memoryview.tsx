"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code, Plus, RefreshCcw, Sheet, Settings, BugPlay } from "lucide-react";
import { DataTable } from "./table";

export function MemoryView() {
  return (
    <div className="w-full">
      <div className="h-[53px] flex ml-4 items-center p-2">
        <span className="text-xl text-slate-900">Table 1 </span>
        <span className="text-xl text-slate-300 ml-5">/</span>
        <Button variant="ghost" size="sm" className="ml-2">
          <Settings color="#333333" className="h-5 w-5" />
        </Button>
      </div>
      <Separator />
      <div className="h-full ">
        <div className="h-12  flex items-center">
          <Button variant="ghost" size="sm" className="mx-4">
            <RefreshCcw className="mr-2 h-3 w-3" color="#333333" />
            Refresh
          </Button>
          <Separator orientation="vertical" className="h-8" />
          <Button size="sm" className="ml-4">
            <Plus className="mr-2 h-3 w-3" color="#ffffff" />
            Insert
          </Button>
          <Separator orientation="vertical" className="h-8 ml-4" />
          <Button size="sm" className="ml-4">
            <BugPlay className="mr-2 h-3 w-3" color="#ffffff" />
            Playground
          </Button>
          <div className="grow"></div>
          <Button size="sm" className="mr-4">
            <Code className="mr-2 h-3 w-3" color="#ffffff" />
            API Docs
          </Button>
        </div>
        <Separator />
        <DataTable />
      </div>
    </div>
  );
}
