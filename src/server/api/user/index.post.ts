import { CreateBodyNotFoundError } from "~/server/errors/common";
import { CreateUserCreateBodyFormatError } from "~/server/errors/user";
import {
  CreateUserBody,
  IndividualUser,
  EnterpriseUser,
} from "~/server/types/user";
import { isSameTypeObject } from "~/server/utils/types";
import { CreateFirebaseError } from "~/server/errors/firebase";
import { getCreateUserAuthParams } from "~/server/utils/api/user";

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as CreateUserBody | undefined;
  if (!body) return CreateBodyNotFoundError("U001");

  const individualUser = new IndividualUser();
  const isIndividualUser = isSameTypeObject(body.user, individualUser);
  const enterpriseUser = new EnterpriseUser();
  const isEnterpriseUser = isSameTypeObject(body.user, enterpriseUser);
  if (!isIndividualUser.result && !isEnterpriseUser)
    return CreateUserCreateBodyFormatError("U002", isIndividualUser.errors, [
      individualUser,
      enterpriseUser,
      body.user,
    ]);

  const isUserNameUsed = await isUserNameExists(body.user.account.name);
  if (isUserNameUsed)
    return { success: false, error: "auth/username-already-exists" };

  const userAuth = await createUserAuth
    .pLogger(...getCreateUserAuthParams(body))
    .catch((err) => ({ uid: undefined, code: err.code }));

  if ("code" in userAuth) return { success: false, code: userAuth.code };
  else if (!userAuth.uid) return CreateFirebaseError("U004");

  // this will run after response
  setTimeout(() => createUserFire(userAuth.uid, body.user));

  return { success: true, message: "UserStore and UserAuth Created" };
});
