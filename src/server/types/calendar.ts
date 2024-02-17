import { FirebaseDocument } from "./firebase";

export class CalendaEventData {
  eID?: string;
  general!: {
    title?: string;
    date: number;
    photoUrl?: string;
  };
  firebase?: FirebaseDocument;

  constructor() {
    this.eID = "_TestEvent";
    this.general = {
      title: "Test Event",
      date: Date.now(),
      photoUrl:
        "https://i.dugun.com/gallery/87269/preview_first-step-wedding-event_w5T7vfjQ.jpeg",
    };
    this.firebase = new FirebaseDocument();
  }
}
