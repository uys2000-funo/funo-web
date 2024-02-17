import { getDoc } from "~/server/utils/firebase/firestore";
import { createUserAuth } from "../firebase/authentication";
import { CreateUserBody, FunoUser } from "~/server/types/user";

export const getCreateUserAuthParams = function (body: CreateUserBody) {
  return [
    body.user.data.account.mail,
    body.password,
    body.user.data.general.phone,
    body.user.data.general.name,
    body.photoURL == "null" ? undefined : body.photoURL,
  ] as Parameters<typeof createUserAuth>;
};

export const createUserFire = function (uID: string, user: FunoUser) {
  user.firebaseDocument.ownerId = "admin";
  user.firebaseDocument.creatorId = "admin";
  setTimeout(() => setDoc(`-Users/${uID}`, user));
  setTimeout(() => {
    const firebaseDocument = { ownerId: "admin", creatorId: "admin" };
    const pair = { mail: user.data.account.mail, firebaseDocument };
    setDoc(`-UserNames/${user.data.account.name}`, pair);
  });
};

export const isUserNameExists = async function (userName: string) {
  if (userName == "") return true;
  const doc = await getDoc(`-UserNames/${userName}`);
  return doc ? true : false;
};
