"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BadgeDollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEmbeddersStore, useRefreshMyEmbedders } from "../store";
import { useEffect, useState } from "react";
import { embedder, model } from "@/data_types/data_types";

const formSchema = z.object({
  my_embedder_name: z.string().min(3, {
    message: "Embedder name must be at least 3 characters.",
  }),
  embedder_service_id: z
    .string()
    .min(0, { message: "Embedding service must be at least 3 characters." }),
  chosen_model_id: z
    .string()
    .min(3, { message: "Model name must be at least 3 characters." }),
  max_chunk_size: z
    .number()
    .min(50, { message: "Chunk size must be at least 50." })
    .max(2000, { message: "Chunk size must be less than 2000." }),
  overlap_size: z
    .number()
    .min(0, { message: "Chunk size must be at least 0." })
    .max(400, { message: "Chunk size must be less than 400." }),
});

export function EmbedderCreateForm({
  initialEmbedder,
  drawerOpen,
  setDrawerOpen,
}: {
  initialEmbedder: embedder | null;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const embedders = useEmbeddersStore((state) => state.embedders);
  const [currentEmbedder, setCurrentEmbedder] = useState<embedder | null>(null);
  const { toast } = useToast();
  const refreshMyEmbedders = useRefreshMyEmbedders(
    (state) => state.refreshMyEmbedders
  );
  const setRefreshMyEmbedders = useRefreshMyEmbedders(
    (state) => state.setRefreshMyEmbedders
  );

  useEffect(() => {
    if (initialEmbedder != null) {
      embedders.map((embedder) => {
        if (embedder.id === initialEmbedder.id) {
          setCurrentEmbedder(embedder);
        }
      });
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      my_embedder_name: "",
      embedder_service_id: initialEmbedder ? initialEmbedder.id : "",
      chosen_model_id: "",
      max_chunk_size: 1200,
      overlap_size: 200,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/create_my_embedder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        // Handle success
        toast({
          title: "Success!",
          description: "Your embedder has been created.",
        });
        setRefreshMyEmbedders(refreshMyEmbedders + 1);
      } else {
        // Handle error
        toast({
          title: "Error!",
          description: "Some Error Occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending request:", error);
      toast({
        title: "Error sending request!",
        description: "Some Error Occurred. Please try again.",
      });
    }
    setDrawerOpen(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mx-12">
        <FormField
          name="my_embedder_name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Embedder Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Embedder"
                  className="w-[180px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Name of the Embedder you want to give
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="embedder_service_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Embedder</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(e) => {
                    embedders.map((embedder: embedder) => {
                      if (embedder.id === e) {
                        setCurrentEmbedder(embedder);
                      }
                    });
                    field.onChange(e);
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Embedding service</SelectLabel>
                      {embedders.map((embedder, index) => {
                        return (
                          <SelectItem value={embedder.id} key={index}>
                            <div className="flex flex-row">
                              <img
                                className="mr-6"
                                src={embedder.image_url}
                                height={18}
                                width={18}
                              ></img>
                              <span>{embedder.service_name}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Choose from Embedding services</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="chosen_model_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Model</SelectLabel>

                      {currentEmbedder ? (
                        currentEmbedder.models.map((model: model, index) => {
                          return (
                            <SelectItem value={model.model_name} key={index}>
                              <div className="flex flex-row">
                                <span>{model.model_name}</span>
                                <div className="flex flex-grow ml-10">
                                  <BadgeDollarSign
                                    className="mr-1 h-4 w-4"
                                    color="#007a35"
                                  />
                                  {currentEmbedder.is_local ? (
                                    "NA"
                                  ) : (
                                    <>
                                      {model.price_per_1000_token_in_USD
                                        ? model.price_per_1000_token_in_USD
                                        : "NA"}
                                    </>
                                  )}
                                </div>
                              </div>
                            </SelectItem>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Choose which model to use</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row w-1/2 ">
          <FormField
            name="max_chunk_size"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Chunk Size</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Characters"
                    className="w-28"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Maximum Charachters in a chunk
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex-grow"></div>
          <FormField
            name="overlap_size"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overlapping</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Characters"
                    className="w-28"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Charachters to overlap between chunks
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
