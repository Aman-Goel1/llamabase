import type { NextApiRequest, NextApiResponse } from "next";
import { embedder } from "../../data_types/data_types";
import axios from "axios";
import prisma from "@/lib/prismaUtils";

interface ErrorResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<embedder[] | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }
  console.log(req.body);

  const { ...my_embedder_data } = req.body;

  const createdChild = await prisma.myEmbedder.create({
    data: {
      ...my_embedder_data,
      // embedder_service_id: {
      //   connect: {
      //     id: embedder_service_id, // ID of the parent you want to connect the child to
      //   },
      // },
    },
  });

  res.status(200).json([]);
}
