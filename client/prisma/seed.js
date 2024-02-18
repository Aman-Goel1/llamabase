const embedders_data = require("./data").embedders_data;
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.model.deleteMany();
    console.log("Deleted records in category table");
    await prisma.embedder.deleteMany();
    console.log("Deleted records in category table");

    await prisma.myEmbedder.deleteMany();
    console.log("Deleted records in product table");

    for (const embedderData of embedders_data) {
      const { models, ...embedder } = embedderData;

      const createdEmbedder = await prisma.embedder.create({
        data: {
          ...embedder,
          models: {
            create: models.map((model) => ({
              ...model,
            })),
          },
        },
      });

      console.log("Created embedder with id:", createdEmbedder.id);
    }

    console.log("Added product data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
