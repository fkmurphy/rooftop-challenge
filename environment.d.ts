export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      TOKEN: string;
      ENV: 'test' | 'challenge';
    }
  }
}
