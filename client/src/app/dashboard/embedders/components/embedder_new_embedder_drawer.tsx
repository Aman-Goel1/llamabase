import * as React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { EmbedderCreateForm } from "./embedder_create_form";
import { EmbedderInfo } from "./embedder_creation_info";
import { useState } from "react";
export function EmbedderDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button size="sm" className="w-52 mb-2" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          <span>New Embedder</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-2/5">
        <div>
          <DrawerHeader>
            <DrawerTitle>Create New Embedder</DrawerTitle>
          </DrawerHeader>
        </div>
        <EmbedderCreateForm
          initialEmbedder={null}
          drawerOpen={isOpen}
          setDrawerOpen={setIsOpen}
        />
        <div className="m-16">
          <EmbedderInfo />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
