export default defineEventHandler(async (event) => {
  return {
    message: "use POST method",
    example: [
      { uToken: "", event: new UserEvent(true) },
      { uToken: "", event: new UserEvent(false) },
    ],
  };
});
