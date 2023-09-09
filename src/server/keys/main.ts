import { ServiceAccount } from "firebase-admin/app";
export default {
  type: "service_account",
  project_id: "funo-66c58",
  private_key_id: process.env.FB_PRIVATE_KEY_ID,
  private_key: process.env.FB_PRIVATE_KEY,
  client_email: "firebase-adminsdk-up12x@funo-66c58.iam.gserviceaccount.com",
  client_id: "110391187052049383559",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-up12x%40funo-66c58.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
} as ServiceAccount;
