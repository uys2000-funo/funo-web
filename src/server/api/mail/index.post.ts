import { CreateBodyNotFoundError } from "~/server/errors/common";
import { CreateMailCreateBodyFormatError } from "~/server/errors/mail";

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as { uname: string } | undefined;
  if (!body) return CreateBodyNotFoundError("M001");

  if (!body.uname) return CreateMailCreateBodyFormatError("M002");

  const doc = await getDoc("/-UserNames/" + body.uname);
  if (!doc) return CreateFirebaseError("M003");

  return { success: true, mail: doc.mail };
});
