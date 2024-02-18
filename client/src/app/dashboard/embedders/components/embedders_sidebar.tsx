"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpNarrowWide, RefreshCcw } from "lucide-react";
import { EmbedderDrawer } from "./embedder_new_embedder_drawer";
import { useMyEmbeddersStore, useRefreshMyEmbedders } from "../store";
import { useEffect } from "react";

export function EmbeddersSidebar() {
  const my_embedders = useMyEmbeddersStore((state) => state.my_embedders);
  const setMyEmbedders = useMyEmbeddersStore((state) => state.setMyEmbedders);
  const refreshMyEmbedders = useRefreshMyEmbedders(
    (state) => state.refreshMyEmbedders
  );

  useEffect(() => {
    fetch("/api/get_my_embedders")
      .then((res) => res.json())
      .then((data) => {
        setMyEmbedders(data);
      });
  }, [refreshMyEmbedders]);

  return (
    <>
      <div className="w-72 border-r-2">
        <div className="h-[53px] flex ml-4 items-center p-2">
          <span className="text-xl text-slate-900">Embedders</span>
        </div>
        <Separator />
        <div className="h-full  m-6">
          <EmbedderDrawer />
          <div className="flex flex-row">
            <span className="text-md text-slate-500 mb-2">Schemas</span>
            <div className="grow"></div>
            <RefreshCcw className="mr-4 h-4 w-4 mt-1" color="#333333" />
          </div>

          {my_embedders.length === 0 ? (
            <></>
          ) : (
            <>
              {my_embedders.map((my_embedder) => {
                return (
                  <Button
                    className="flex flex-row p-0"
                    variant="link"
                    size="sm"
                  >
                    <ArrowUpNarrowWide size={18} color="#000000" />
                    <span className="ml-2 text-slate-600  text-sm">
                      {my_embedder.my_embedder_name}
                    </span>
                  </Button>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
