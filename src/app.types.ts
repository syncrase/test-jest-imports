export interface AppConfig {
  API_GATEWAY_DOMAIN: string;
  API_IDENTITY_PROVIDER_DOMAIN: string;
  NODE_EXTRA_CA_CERTS: string;
  NODE_ENV: string;
  // Logger
  LOGGER_LEVEL: string;
  LOG_PROD: string;
  DEPTH_LOG: number;
  // OAuth2
  OAUTH2_TIME_TO_LEAVE: number;
  // WSO2
  WSO2_CLIENT_ID: string;
  WSO2_CLIENT_SECRET: string;
  // Crypto
  ACCESS_TOKEN_SECRET_KEY: string;
  ACCESS_TOKEN_SECRET_IV: string;
  USER_ID_AT_INTERNET_ENCRYPT_KEY: string;
  USER_ID_AT_INTERNET_AUTHENT_KEY: string;
  ID_REPER_SALT_FOR_TRUSTEER: string;
  USER_FRONT_SECRET_KEY: string;
  USER_FRONT_SECRET_IV: string;
  KEYPAD_KEYS_IN_ORDER: boolean;
  // Prismic
  PRISMIC_AGENT_URL: string;
  PRISMIC_CACHE_LIMIT: number;
  PRISMIC_CACHE_TTL_IN_MS: number;
  PRISMIC_TOKEN: string;
  PRISMIC_TIMEOUT: number;
  PRISMIC_URL: string;
  PRISMIC_WEBHOOK_SECRET: string;
  // Redis CGU
  REDIS_URL: string;

  // Redis main config
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD: string;
  REDIS_RETRY_TIME: number;
  // API key
  KEY_API_HEADER: string;
  SECOND_KEY_API_HEADER: string;
  KEY_API_HEADER_CHECK: string;
  // Debug mode GraphQL
  GRAPHQL_OUTPUT_DEBUG: boolean;
  // Timeouts
  TIMEOUT_PAYLIB_ENROLLMENT: number;
  TIMEOUT_PAYLIB_TRANSFER: number;
  TIMEOUT_FLUX: number;
  TIMEOUT_CITY_EXPLORER: number;
  TIMEOUT_BANK_CARD: number;
  TIMEOUT_PASSWORD_RECOVERY: number;
  TIMEOUT_APPLE_PAY: number;
  TIMEOUT_CONTRACT: number;
  TIMEOUT_WSO2: number;
  TIMEOUT_AUTHENTICATION_SERVICE: number;
  TIMEOUT_CREDIT_SERVICE: number;
  TIMEOUT_IDENTITY_PROVIDER: number;
  TIMEOUT_MSAFCBEL: number;
  TIMEOUT_MSIARDIN: number;
  TIMEOUT_MSPRLVMT: number;
  TIMEOUT_RISK_ASSESSMENT: number;
  TIMEOUT_TRANSFER_SERVICE: number;
  TIMEOUT_USER_SERVICE: number;
  TIMEOUT_WARBEL_CONTEXT_PROVIDER: number;
  TIMEOUT_APPOINTMENT_SERVICE: number;

  HOST_BFF_MOBILE: string;
}
