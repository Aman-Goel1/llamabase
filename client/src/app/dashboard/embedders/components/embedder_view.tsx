"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";
import { EmbedderCard } from "./embedders_card";
import { useEmbeddersStore } from "../store";

export function EmbedderView() {
  const embedders = useEmbeddersStore((state) => state.embedders);
  const setEmbedders = useEmbeddersStore((state) => state.setEmbedders);

  useEffect(() => {
    fetch("/api/get_embedders")
      .then((res) => res.json())
      .then((data) => {
        setEmbedders(data);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="h-[53px] flex ml-4 items-center p-2">
        <span className="text-xl text-slate-900">Services </span>
      </div>
      <Separator />
      <div className="h-full mt-6">
        <span className="p-6 text-xl  text-grey-800">Supported Services:</span>
        <div className="flex flex-wrap flex-row">
          {embedders.length === 0 ? (
            <></>
          ) : (
            embedders.map((item, index) => {
              return (
                <div className="md:w-full lg:w-1/2 p-4 xl:w-1/3" key={index}>
                  <EmbedderCard data={item} />
                </div>
              ); // Render the EmbedderCard for each item in the data array
            })
          )}
        </div>
      </div>
    </div>
  );
}
