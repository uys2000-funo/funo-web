export const CreateBodyNotFoundError = function (errorCode: string = "") {
  throw createError({
    statusCode: 400,
    statusMessage: "Bad Request",
    message: `${errorCode ? errorCode + ": " : ""}Body Not Found`,
  });
};

export const CreateUnauthorizedError = function (errorCode: string = "") {
  throw createError({
    statusCode: 401,
    statusMessage: "Unauthorized",
    message: `${errorCode ? errorCode + ": " : ""}Unauthorized User`,
  });
};
