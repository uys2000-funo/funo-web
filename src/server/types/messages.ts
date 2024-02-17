import { FirebaseDocument, FirebasePagination } from "./firebase";
import { names, userPhotoUrls, messages } from "./examples";

export class MessageData {
  uID!: string;
  photoUrl!: string;
  message!: string;
  hasAccess!: string[];
  /**
   * MessageData Object
   * @param {boolean} isExample - Creates a example MessageData
   */
  constructor(isExample = false) {
    this.message = "";
    this.photoUrl = "";
    this.hasAccess = [];
    if (isExample) {
      this.uID = Math.random() < 0.5 ? "-uID" : "-euID";
      this.photoUrl =
        userPhotoUrls[Math.floor(Math.random() * userPhotoUrls.length)];
      this.message = messages[Math.floor(Math.random() * messages.length)];
      this.hasAccess = ["-uID", "-euID"];
    }
  }
}

export class Message {
  mID?: string;
  data!: MessageData;
  firebaseDocument?: FirebaseDocument;
  /**
   * Message Object
   * @param {boolean} isExample - Creates a example Message
   */
  constructor(isExample = false) {
    this.mID = "";
    this.data = new MessageData(isExample);
    this.firebaseDocument = new FirebaseDocument(isExample);
    if (isExample) this.mID = "-mID";
  }
}

export class MessageSummaryData {
  chatName!: string;
  participants!: string[];
  participantsPhotoUrls!: string[];
  messages?: Message[];
  /**
   * MessageSummaryData Object
   * @param {boolean} isExample - Creates a example MessageSummaryData
   */
  constructor(isExample = false) {
    this.chatName = "";
    this.participants = [];
    this.participantsPhotoUrls = [];
    this.messages = [];
    if (isExample) {
      this.chatName = names[Math.floor(Math.random() * names.length)];
      this.participants = ["-uID", "-euID"];
      this.participantsPhotoUrls.push(
        userPhotoUrls[Math.floor(Math.random() * userPhotoUrls.length)]
      );
      this.participantsPhotoUrls.push(
        userPhotoUrls[Math.floor(Math.random() * userPhotoUrls.length)]
      );
      this.messages = [new Message(true)];
    }
  }
}
export class MessageSummary {
  mcID?: string;
  data!: MessageSummaryData;
  firebaseDocument!: FirebaseDocument;
  /**
   * MessageSummary Object
   * @param {boolean} isExample - Creates a example MessageSummary
   */
  constructor(isExample = false) {
    this.mcID = "";
    this.data = new MessageSummaryData(isExample);
    this.firebaseDocument = new FirebaseDocument(isExample);
    if (isExample) this.mcID = "-mcID";
  }
}

export class MessageList {
  mcID?: string;
  data!: Message[];
  firebasePagination?: FirebasePagination;
  firebaseDocument?: FirebaseDocument;
  /**
   * MessageList Object
   * @param {boolean} isExample - Creates a example MessageList
   */
  constructor(isExample = false) {
    this.mcID = "";
    this.data = [];
    this.firebasePagination = new FirebasePagination(isExample);
    this.firebaseDocument = new FirebaseDocument(isExample);
    if (isExample) {
      this.mcID = "-mcID";
      for (let i = 0; i < 20; i++) this.data.push(new Message(true));
    }
  }
}
// eslint-disable-next-line
if (false) {
  ("Stracture of Messages in DB");

  const ExampleDataBaseStracture = {
    // Collection Name
    _Messages: {
      // Custom mID for Chats
      mID: {
        // uIDs of users in chat
        chatName: "",
        participants: ["uID"],
        participantsPhotoUrls: ["uID"],
        // SubCollection
        messages: {
          // Message
          mID: {
            data: {
              message: "",
              // users whic are able to see
              hasAccess: ["uID"],
            },
            firebase: new FirebaseDocument(),
          },
        },
        firebase: new FirebaseDocument(),
      },
    },
  };
  ExampleDataBaseStracture;
}
