// env.d.ts
declare module '*.env' {
    const env: { [key: string]: string | undefined };
    export default env;
  }
  