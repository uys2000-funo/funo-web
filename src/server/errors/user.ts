import { IndividualUser, EnterpriseUser } from "~/server/types/user";

export const CreateUserCreateBodyFormatError = function (
  errorCode: string = "",
  keys: string[],
  bodies: [
    IndividualUser | EnterpriseUser,
    IndividualUser | EnterpriseUser,
    IndividualUser | EnterpriseUser
  ]
) {
  throw createError({
    statusCode: 400,
    statusMessage: "Bad Request",
    message: `${errorCode ? errorCode + ": " : ""}Body Format Not Usable`,
    data: {
      message: "Usable request body examples",
      missedKeys: keys,
      bodies: {
        expected: bodies[0],
        expected2: bodies[1],
        met: bodies[2],
      },
      examples: [
        { password: "", user: new IndividualUser() },
        { password: "", user: new EnterpriseUser() },
      ],
    },
  });
};
