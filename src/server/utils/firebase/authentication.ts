import { auth } from "~/server/utils/firebase/firebase";

export const verifyUser = async function (token: string) {
  const user = await auth.verifyIdToken(token);
  if (!user.uid) return undefined;
  return user;
};

export const getUser = async function (index: string) {
  try {
    const user = await auth.getUserByEmail(`${index}@mehmetuysal.dev`);
    if (!user.uid) return undefined;
    else return user;
  } catch {
    return undefined;
  }
};

export const createUserAuth = function (
  mail: string,
  password: string,
  phoneNumber: string,
  displayName: string,
  photoURL?: string
) {
  return auth.createUser({
    email: mail,
    password: password,
    phoneNumber: "+9" + phoneNumber.replace(/[ \(\)]/g, ""),
    displayName: displayName,
    photoURL: photoURL,
  });
};
