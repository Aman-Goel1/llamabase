import { CircleIcon } from "@radix-ui/react-icons";
import { BadgeDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { embedder, model } from "@/data_types/data_types";
import { EmbedderUseDrawer } from "./embedder_use_embedder";

export function EmbedderCard({ data }: { data: embedder }) {
  let leastPrice: number | null = null;
  let greatestPrice: number | null = null;

  // Iterate through models to find least and greatest price
  for (const model of data.models) {
    if (leastPrice === null || model.price_per_1000_token_in_USD < leastPrice) {
      leastPrice = model.price_per_1000_token_in_USD;
    }

    if (
      greatestPrice === null ||
      model.price_per_1000_token_in_USD > greatestPrice
    ) {
      greatestPrice = model.price_per_1000_token_in_USD;
    }
  }

  return (
    <Card>
      <div className="flex flex-row">
        <img className="ml-6" src={data.image_url} height={30} width={30}></img>
        <CardHeader className="flex flex-row w-full">
          <div className="space-y-1">
            <CardTitle>{data.service_name}</CardTitle>
            <CardDescription>
              <span className="font-semibold">Models:- </span>
              {data.models.map((item: model, key) => {
                return (
                  <span key={key}>
                    <span>{item.model_name}</span>
                    {key != 1 ? <span> | </span> : <></>}
                  </span>
                );
              })}
            </CardDescription>
          </div>
          <div className="flex-grow"></div>
          <EmbedderUseDrawer embedderdata={data} />
        </CardHeader>
      </div>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            {data.is_local ? (
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-yellow-400" />
            ) : (
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            )}
            {data.is_local ? "Local" : "Cloud"}
          </div>
          <div className="grow"></div>
          <div className="flex items-center">
            <BadgeDollarSign className="mr-1 h-4 w-4" color="#007a35" />
            {data.is_local ? (
              "NA"
            ) : (
              <>
                {leastPrice}-{greatestPrice} per 1000 tokens
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
