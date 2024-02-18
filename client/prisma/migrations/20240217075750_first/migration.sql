-- CreateTable
CREATE TABLE "Model" (
    "id" TEXT NOT NULL,
    "model_name" TEXT NOT NULL,
    "max_input_tokens" INTEGER NOT NULL,
    "output_dimensions" INTEGER NOT NULL,
    "price_per_1000_token_in_USD" DOUBLE PRECISION NOT NULL,
    "embedder_id" TEXT NOT NULL,
    "index" SERIAL NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Embedder" (
    "id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "api" TEXT NOT NULL,
    "is_local" BOOLEAN NOT NULL,
    "index" SERIAL NOT NULL,

    CONSTRAINT "Embedder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyEmbedder" (
    "id" TEXT NOT NULL,
    "max_chunk_size" INTEGER NOT NULL,
    "overlap_size" INTEGER NOT NULL,
    "chosen_model_id" TEXT NOT NULL,
    "my_embedder_name" TEXT NOT NULL,
    "embedderService_id" TEXT NOT NULL,
    "index" SERIAL NOT NULL,

    CONSTRAINT "MyEmbedder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_embedder_id_fkey" FOREIGN KEY ("embedder_id") REFERENCES "Embedder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyEmbedder" ADD CONSTRAINT "MyEmbedder_embedderService_id_fkey" FOREIGN KEY ("embedderService_id") REFERENCES "Embedder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
