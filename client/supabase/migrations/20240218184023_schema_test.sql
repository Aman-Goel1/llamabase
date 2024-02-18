CREATE TABLE embedder (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_name VARCHAR(255),
    image_url VARCHAR(255),
    api VARCHAR(255),
    is_local BOOLEAN
);

CREATE TABLE Model (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    model_name VARCHAR(255),
    max_input_tokens INT,
    output_dimensions INT,
    price_per_1000_token_in_USD FLOAT,
    embedder_id UUID,
    FOREIGN KEY (embedder_id) REFERENCES Embedder(id)
);

CREATE TABLE MyEmbedder (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    max_chunk_size INT,
    overlap_size INT,
    chosen_model_id UUID,
    my_embedder_name VARCHAR(255),
    embedder_service_id UUID,
    FOREIGN KEY (embedder_service_id) REFERENCES Embedder(id)
);