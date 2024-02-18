"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, RefreshCcw, Sheet } from "lucide-react";
import { DrawerDemo } from "./drawer";
export function MemorySidebar() {
  return (
    <div className="w-72 border-r-2">
      <div className="h-[53px] flex ml-4 items-center p-2">
        <span className="text-xl text-slate-900">Memory Model</span>
      </div>
      <Separator />
      <div className="h-full  m-6">
        <DrawerDemo />
        <div className="flex flex-row">
          <span className="text-md text-slate-500 mb-2">Schemas</span>
          <div className="grow"></div>
          <RefreshCcw className="mr-4 h-4 w-4 mt-1" color="#333333" />
        </div>

        <Button className="flex flex-row p-0" variant="link" size="sm">
          <Sheet size={18} color="#000000" />
          <span className="ml-2 text-slate-600  text-sm"> Table 1</span>
        </Button>
      </div>
    </div>
  );
}
