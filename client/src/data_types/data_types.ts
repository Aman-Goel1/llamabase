export interface model {
  id: string;
  model_name: string;
  max_input_tokens: number;
  output_dimensions: number;
  price_per_1000_token_in_USD: number;
}

export interface embedder {
  id: string;
  service_name: string;
  models: model[];
  image_url: string;
  api: string;
  is_local: boolean;
}

export interface my_embedder {
  id: string;
  max_chunk_size: number;
  overlap_size: number;
  chosen_model_id: string;
  embedder_service: embedder;
  my_embedder_name: string;
}

// model MyEmbedder {
//   id                  String   @id @default(uuid())
//   max_chunk_size      Int
//   overlap_size        Int
//   chosen_model_id     String
//   my_embedder_name    String
//   embedder_service    Embedder @relation(fields: [embedder_service_id], references: [id])
//   embedder_service_id String
//   index               Int      @default(autoincrement())
// }
