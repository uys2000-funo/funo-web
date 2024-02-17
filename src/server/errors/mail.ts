export const CreateMailCreateBodyFormatError = function (
  errorCode: string = ""
) {
  throw createError({
    statusCode: 400,
    statusMessage: "Bad Request",
    message: `${errorCode ? errorCode + ": " : ""}Body Format Not Usable`,
  });
};
