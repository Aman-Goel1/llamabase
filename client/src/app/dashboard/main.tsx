"use client";

import { Navbar } from "@/components/navbar";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Brain,
  BrainCircuit,
  ArrowUp01,
  Wrench,
  Slack,
  LogOut,
  ActivitySquare,
} from "lucide-react";

import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            "min-w-[60px] transition-all duration-300 ease-in-out h-lvh flex flex-col w-20 border-2"
          )}
        >
          <div className={cn("flex h-[52px] items-center justify-center")}>
            <Logo />
          </div>
          <Separator />

          <Navbar
            links={[
              {
                title: "Dashboard",
                label: "",
                icon: LayoutDashboard,
                variant: "ghost",
                href: "#",
              },
            ]}
          />
          <Separator />
          <Navbar
            links={[
              {
                title: "Memory Modal",
                label: "",
                icon: Brain,
                variant: pathname == "/dashboard/memory" ? "default" : "ghost",
                href: "/dashboard/memory",
              },
              {
                title: "Embedders",
                label: "",
                icon: ArrowUp01,
                variant:
                  pathname == "/dashboard/embedders" ? "default" : "ghost",
                href: "/dashboard/embedders",
              },
            ]}
          />
          <Separator />
          <Navbar
            links={[
              {
                title: "Tools",
                label: "",
                icon: Wrench,
                variant: "ghost",
                href: "#",
              },
              {
                title: "Generations",
                label: "",
                icon: BrainCircuit,
                variant: "ghost",
                href: "#",
              },
            ]}
          />
          <Separator />
          <Navbar
            links={[
              {
                title: "Usage Monitor",
                label: "",
                icon: ActivitySquare,
                variant: "ghost",
                href: "#",
              },
            ]}
          />
          <div className="grow"></div>
          <div className={cn("h-[52px] grid gap-1 justify-center px-2")}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <Slack />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                Join Slack
              </TooltipContent>
            </Tooltip>
          </div>
          <div className={cn("h-[52px] grid gap-1 justify-center px-2")}>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}
                >
                  <LogOut />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                Log Out
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}
