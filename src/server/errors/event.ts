export const CreateUnfoundEventDataError = function () {
  throw createError({
    statusCode: 400,
    statusMessage: "Bad Request",
    message: "Bady is not Usable",
    data: {
      message: "Usable request body examples",
      examples: [
        { uToken: "", event: new UserEvent(true) },
        { uToken: "", event: new UserEvent(false) },
      ],
    },
  });
};

export const CreateKeyNotFoundError = function () {
  throw createError({
    statusCode: 400,
    statusMessage: "Bad Request",
    message: `Needed Key Not Found Check Your Event Data`,
    data: {
      message: "Usable request body examples",
      examples: [
        { uToken: "", event: new UserEvent(true) },
        { uToken: "", event: new UserEvent(false) },
      ],
    },
  });
};
