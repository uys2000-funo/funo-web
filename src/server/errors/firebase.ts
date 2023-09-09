export const CreateFirebaseError = function (errorCode: string = "") {
  throw createError({
    statusCode: 500,
    statusMessage: "Internal Server Error",
    message: `${errorCode ? errorCode + ": " : ""}Firebase Service Gave Error`,
  });
};
