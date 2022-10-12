import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  config: {
    withResultType: true,
    namingConvention: {
      typeNames: "keep",
      enumValues: "keep",
    },
    transformUnderscore: false,
  },
  schema: "https://tmdb.sandbox.zoosh.ie/dev/grphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/generated-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    /*
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    */
  },
  debug: true,
  verbose: true,
};

export default config;
