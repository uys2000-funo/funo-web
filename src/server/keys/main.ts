import { ServiceAccount } from "firebase-admin/app";
export default {
  type: "service_account",
  project_id: process.env.NUXT_APP_FIREBASE_PROJECT_ID,
  private_key_id: process.env.NUXT_APP_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.NUXT_APP_FIREBASE_PRIVATE_KEY,
  client_email: process.env.NUXT_APP_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.NUXT_APP_FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url:
    process.env.NUXT_APP_FIREBASE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.NUXT_APP_FIREBASE_CLIENT_CERT_URL,
  universe_domain: "googleapis.com",
} as ServiceAccount;
