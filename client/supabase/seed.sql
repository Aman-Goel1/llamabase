
-- Seed data for Embedder table
INSERT INTO Embedder (id, service_name, image_url, api, is_local)
VALUES 
    (gen_random_uuid(), 'OpenAI', 'https://www.cdnlogo.com/logos/o/38/openai.svg', 'hello', false),
    (gen_random_uuid(), 'Huggingface', 'https://global.discourse-cdn.com/hellohellohello/o2X/a/a0a628441848519a48682665ed6d7dad032927d3.svg', 'hello', true),
    (gen_random_uuid(), 'Cohere', 'https://cdn.sanity.io/images/rjtqmwfu/production/ae020d94b599cc453cc09ebc80be06d35d953c23-102x18.svg', 'hello', false);

-- Seed data for Model table
INSERT INTO Model (id, model_name, max_input_tokens, output_dimensions, price_per_1000_token_in_USD, embedder_id)
VALUES
    (gen_random_uuid(), 'v3 ada', 123, 1234, 1, (SELECT id FROM Embedder WHERE service_name = 'OpenAI')),
    (gen_random_uuid(), 'v1 ada', 123, 1234, 1, (SELECT id FROM Embedder WHERE service_name = 'OpenAI')),
    (gen_random_uuid(), 'v3 ada', 123, 1234, 1, (SELECT id FROM Embedder WHERE service_name = 'Huggingface')),
    (gen_random_uuid(), 'v2 ada', 123, 1234, 1, (SELECT id FROM Embedder WHERE service_name = 'Huggingface')),
    (gen_random_uuid(), 'v3 ada', 123, 1234, 1, (SELECT id FROM Embedder WHERE service_name = 'Cohere')),
    (gen_random_uuid(), 'v2 ada', 123, 1234, 1, (SELECT id FROM Embedder WHERE service_name = 'Cohere'));
