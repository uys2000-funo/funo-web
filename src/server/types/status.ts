import { FirebaseDocument } from "./firebase";

export class StatusData {
  general!: {
    photoUrl: string;
    description: string;
  };
  owner!: {
    id: string;
    name: string;
    photoUrl: string;
  };
  firebase?: FirebaseDocument;
  constructor() {
    this.general = {
      photoUrl: "",
      description: "",
    };
    this.owner = {
      id: "",
      name: "",
      photoUrl: "",
    };
    this.firebase = new FirebaseDocument();
  }
}
