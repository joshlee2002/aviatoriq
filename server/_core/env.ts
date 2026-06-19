export const ENV = {
  appId: process.env.VITE_APP_ID ?? "aviatorpath-self-hosted",
  cookieSecret: process.env.JWT_SECRET ?? "change-me-in-production",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "admin",
  isProduction: process.env.NODE_ENV === "production",
  // Support both BUILT_IN_FORGE_API_KEY (Manus) and OPENAI_API_KEY (self-hosted)
  forgeApiUrl:
    process.env.BUILT_IN_FORGE_API_URL ?? process.env.OPENAI_API_BASE ?? "",
  forgeApiKey:
    process.env.BUILT_IN_FORGE_API_KEY ?? process.env.OPENAI_API_KEY ?? "",
  pexelsApiKey: process.env.PEXELS_API_KEY ?? "",
  localStoragePath: process.env.LOCAL_STORAGE_PATH ?? "uploads",
};
