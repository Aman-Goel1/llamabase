"use client";

import { cookies } from "next/headers";
import * as React from "react";
import Dashboard from "../main";
import { EmbeddersSidebar } from "./components/embedders_sidebar";
import { EmbedderView } from "./components/embedder_view";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Dashboard />
      <EmbeddersSidebar />
      <EmbedderView />
    </div>
  );
}
