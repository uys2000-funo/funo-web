import { FirebaseDocument, FirebasePagination } from "./firebase";

import { names, notifications, userPhotoUrls, times } from "./examples";
export class NotificationData {
  title!: string;
  content!: string;
  photoUrl!: string;
  reciveTime!: number;
  isReaded!: boolean;
  constructor(isExample = false) {
    this.title = "";
    this.content = "";
    this.photoUrl = "";
    this.reciveTime = Date.now();
    this.isReaded = false;
    if (isExample) {
      this.title = names[Math.floor(Math.random() * names.length)];
      this.content =
        notifications[Math.floor(Math.random() * notifications.length)];
      this.photoUrl =
        userPhotoUrls[Math.floor(Math.random() * userPhotoUrls.length)];
      this.reciveTime = times[Math.floor(Math.random() * times.length)];
      this.isReaded = Math.random() < 0.5;
    }
  }
}

export class FunoNotification {
  nID?: string;
  data!: NotificationData;
  firebaseDocument!: FirebaseDocument;
  constructor(isExample = false) {
    this.nID = "";
    this.data = new NotificationData(isExample);
    this.firebaseDocument = new FirebaseDocument(isExample);
    if (isExample) this.nID = "-nID";
  }
}

export class FunoNotifications {
  data!: FunoNotification[];
  firebasePagination!: FirebasePagination;
  constructor(isExample = false) {
    this.data = [];
    this.firebasePagination = new FirebasePagination(isExample);
    if (isExample) {
      const add = (isFirstTime = true) => {
        if (Math.random() < 0.9 || isFirstTime) {
          this.data.push(new FunoNotification(true));
          add(false);
        }
      };
      add();
    }
  }
}
