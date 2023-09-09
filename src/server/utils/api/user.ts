import { getDoc } from "~/server/utils/firebase/firestore";
import {
  CreateUserBody,
  EnterpriseUser,
  IndividualUser,
} from "~~/.nuxt/imports";
import { createUserAuth } from "../firebase/authentication";

export const getCreateUserAuthParams = function (body: CreateUserBody) {
  return [
    body.user.account.mail,
    body.password,
    body.user.general.phone,
    body.user.general.name,
    body.photoURL == "null" ? undefined : body.photoURL,
  ] as Parameters<typeof createUserAuth>;
};

export const createUserFire = function (
  uID: string,
  user: IndividualUser | EnterpriseUser
) {
  user.firebase.ownerId = "admin";
  user.firebase.creatorId = "admin";
  setTimeout(() => setDoc(`_Users/${uID}`, user));
  setTimeout(() => {
    const firebase = { ownerId: "admin", creatorId: "admin" };
    const pair = { mail: user.account.mail, firebase: firebase };
    setDoc(`_UserNames/${user.account.name}`, pair);
  });
};

export const isUserNameExists = async function (userName: string) {
  if (userName == "") return true;
  const doc = await getDoc(`_UserNames/${userName}`);
  return doc ? true : false;
};
