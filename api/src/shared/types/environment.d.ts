declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      GHIBLI_URL?: string;
    }
  }
}

export {};
