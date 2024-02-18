import type { NextApiRequest, NextApiResponse } from "next";
import { embedder } from "../../data_types/data_types";
import prisma from "@/lib/prismaUtils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<embedder[]>
) {
  const embedders = await prisma.embedder.findMany({
    include: {
      models: true,
    },
  });

  res.status(200).json(embedders);
}
