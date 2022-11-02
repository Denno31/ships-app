import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.spacex.land/graphql/",
  documents: "**/*.{gql,graphql}",
  generates: {
    "./graphql/schema.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
