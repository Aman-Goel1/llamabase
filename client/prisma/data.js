const embedders_data = [
  {
    service_name: "OpenAI",
    models: [
      {
        model_name: "v3 ada",
        max_input_tokens: 123,
        output_dimensions: 1234,
        price_per_1000_token_in_USD: 1,
      },
      {
        model_name: "v1 ada",
        max_input_tokens: 123,
        output_dimensions: 1234,
        price_per_1000_token_in_USD: 1,
      },
    ],
    image_url: "https://www.cdnlogo.com/logos/o/38/openai.svg",
    api: "hello",

    is_local: false,
  },
  {
    service_name: "Huggingface",
    models: [
      {
        model_name: "v3 ada",
        max_input_tokens: 123,
        output_dimensions: 1234,
        price_per_1000_token_in_USD: 1,
      },
      {
        model_name: "v2 ada",
        max_input_tokens: 123,
        output_dimensions: 1234,
        price_per_1000_token_in_USD: 1,
      },
    ],
    image_url:
      "https://global.discourse-cdn.com/hellohellohello/o…2X/a/a0a628441848519a48682665ed6d7dad032927d3.svg",
    api: "hello",
    is_local: true,
  },
  {
    service_name: "Cohere",
    models: [
      {
        model_name: "v3 ada",
        max_input_tokens: 123,
        output_dimensions: 1234,
        price_per_1000_token_in_USD: 1,
      },
      {
        model_name: "v2 ada",
        max_input_tokens: 123,
        output_dimensions: 1234,
        price_per_1000_token_in_USD: 1,
      },
    ],
    api: "hello",

    is_local: false,
    image_url:
      "https://cdn.sanity.io/images/rjtqmwfu/production/ae020d94b599cc453cc09ebc80be06d35d953c23-102x18.svg",
  },
];
module.exports = {
  embedders_data,
};
