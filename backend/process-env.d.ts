declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    PORT: string;
    DATABASE: string;
    ACCESS_TOKEN_SECRET: string;
    DB_USER: string;
    DB_PORT: string;
    // add more environment variables and their types here
  }
}
