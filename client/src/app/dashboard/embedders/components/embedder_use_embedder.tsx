import * as React from "react";
import { RocketIcon } from "@radix-ui/react-icons";
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
import { embedder } from "@/data_types/data_types";
import { useState } from "react";
export function EmbedderUseDrawer({
  embedderdata,
}: {
  embedderdata: embedder;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="px-3 shadow-none">
          <RocketIcon className="mr-2 h-4 w-4" />
          Use
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-2/5">
        <div>
          <DrawerHeader>
            <DrawerTitle>embedder</DrawerTitle>
          </DrawerHeader>
        </div>
        <EmbedderCreateForm
          initialEmbedder={embedderdata}
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
