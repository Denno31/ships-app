import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.spacex.land/graphql/",
  documents: "**/*.{gql,graphql}",
  generates: {
    "./graphql/generated/schema.ts": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
