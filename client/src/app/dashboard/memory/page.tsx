import * as React from "react";
import Dashboard from "../main";
import { MemorySidebar } from "./components/memorysidebar";
import { MemoryView } from "./components/memoryview";
export default function MemoryPage() {
  return (
    <div className="flex">
      <Dashboard />
      <MemorySidebar />
      <MemoryView />
    </div>
  );
}
