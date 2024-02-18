import type { NextApiRequest, NextApiResponse } from "next";
import { embedder, my_embedder } from "../../data_types/data_types";

import prisma from "@/lib/prismaUtils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<my_embedder[]>
) {
  const myembedders = await prisma.myEmbedder.findMany({
    include: {
      embedder_service: {
        include: {
          models: true,
        },
      },
    },
  });
  res.status(200).json(myembedders);
}
