import { CodegenConfig } from "@graphql-codegen/cli";

import * as dotenv from "dotenv";
dotenv.config();

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
  schema: process.env.REACT_APP_TMDB_GQL_URI,
  documents: "src/graphql/**/*.graphql",
  generates: {
    "./src/graphql/generated-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  debug: false,
  verbose: false,
};

export default config;
