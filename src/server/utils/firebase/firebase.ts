import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

import service from "~/server/keys/main";

export const main = initializeApp({ credential: cert(service) }, "main");

export const firestore = getFirestore(main);
export const auth = getAuth(main);
