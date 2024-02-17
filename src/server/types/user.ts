import { FirebaseDocument, FirebasePagination } from "./firebase";
import { EventMainTag } from "./event";

import { names, ages, userPhotoUrls, matchReasons } from "./examples";

export class CreateUserBody {
  user!: FunoUser;
  password!: string;
  photoURL!: string;
}

export class UserMailData {
  mail!: string;

  constructor(example = false) {
    this.mail = "";

    if (example) {
      this.mail = "example@mail.com";
    }
  }
}
export class UserMail {
  umID?: string;
  data!: UserMailData;
  firebaseDocument?: FirebaseDocument;

  constructor(example = false) {
    this.data = new UserMailData(example);
    this.firebaseDocument = new FirebaseDocument(example);
  }
}
export class UserData {
  general!: {
    name: string;
    phone: string;
    photoUrl: string;
  };
  account!: {
    name: string;
    mail: string;
  };
  counts?: {
    followers?: number;
    following?: number;
    posints?: number;
    posts?: number;
    comments?: number;
    likes?: number;
    events?: number;
    participating?: number;
  };
  settings?: {
    privacy?: {
      showMail?: boolean;
    };
  };
  interests?: {
    main?: EventMainTag[];
    side?: string[];
  };
  constructor(example = false) {
    this.general = {
      name: "",
      phone: "",
      photoUrl: "",
    };
    this.account = {
      name: "",
      mail: "",
    };
    this.counts = {
      followers: 0,
      following: 0,
      posints: 0,
      posts: 0,
      comments: 0,
      likes: 0,
      events: 0,
      participating: 0,
    };
    this.settings = {
      privacy: {
        showMail: false,
      },
    };
    this.interests = {
      main: [],
      side: [],
    };
    if (example) {
      this.general = {
        name: "name",
        phone: "0000000000",
        photoUrl: "",
      };
      this.account = {
        name: "userName",
        mail: "example@mail.com",
      };
      this.counts = {
        followers: 0,
        following: 0,
        posints: 0,
        posts: 0,
        comments: 0,
        likes: 0,
        events: 0,
        participating: 0,
      };
      this.settings = {
        privacy: {
          showMail: false,
        },
      };
      this.interests = {
        main: ["sport"],
        side: ["sTag"],
      };
    }
  }
}
export class IndividualUserData extends UserData {
  general: {
    name: string;
    surname: string;
    phone: string;
    birthdate: number;
    gender: boolean;
    photoUrl: string;
  };
  constructor(example = false) {
    super(example);
    this.general = {
      name: "",
      surname: "",
      phone: "",
      birthdate: 0,
      gender: true,
      photoUrl: "",
    };
    if (example) {
      this.general = {
        name: "name",
        surname: "surname",
        phone: "0000000000",
        birthdate: 0,
        gender: true,
        photoUrl: "",
      };
    }
  }
}
export class IndividualUser {
  uID?: string;
  data!: IndividualUserData;
  firebaseDocument: FirebaseDocument;
  constructor(example = false) {
    this.data = new IndividualUserData(example);
    this.firebaseDocument = new FirebaseDocument(example);
    if (example) {
      this.uID = "-uID";
    }
  }
}
export class EnterpriseUserData extends UserData {
  general: {
    name: string;
    taxNumber: string;
    phone: string;
    address: string;
    photoUrl: string;
    isVerified: boolean;
  };
  constructor(example = false) {
    super(example);
    this.general = {
      name: "",
      taxNumber: "",
      phone: "",
      address: "",
      photoUrl: "",
      isVerified: false,
    };
    if (example) {
      this.general = {
        name: "enterpriseName",
        taxNumber: "taxNumber",
        phone: "0000000000",
        address: "enterpriseAddress",
        photoUrl: "",
        isVerified: false,
      };
      this.account = {
        name: "enterpriseUserName",
        mail: "eexample@mail.com",
      };
    }
  }
}
export class EnterpriseUser {
  uID?: string;
  data!: EnterpriseUserData;
  firebaseDocument: FirebaseDocument;
  constructor(example = false) {
    this.data = new EnterpriseUserData(example);
    this.firebaseDocument = new FirebaseDocument(example);
    if (example) {
      this.uID = "-euID";
    }
  }
}

export type FunoUserData = IndividualUserData | EnterpriseUserData;
export type FunoUser = IndividualUser | EnterpriseUser;

export class SuggestedUserGeneralData {
  name!: string;
  age!: number;
  photoUrl!: string;
  constructor(isExample = false) {
    this.name = "";
    this.age = 0;
    this.photoUrl = "";
    if (isExample) {
      this.name = names[Math.floor(Math.random() * names.length)];
      this.age = ages[Math.floor(Math.random() * ages.length)];
      this.photoUrl =
        userPhotoUrls[Math.floor(Math.random() * userPhotoUrls.length)];
    }
  }
}

export class SuggestedUserMatchData {
  percentage!: number;
  reason!: string;
  constructor(isExample = false) {
    this.percentage = 0;
    this.reason = "";
    if (isExample) {
      this.percentage = Math.floor(Math.random() * 100);
      this.reason =
        matchReasons[Math.floor(Math.random() * matchReasons.length)];
    }
  }
}

export class SuggestedUserData {
  general!: SuggestedUserGeneralData;
  match!: SuggestedUserMatchData;
  constructor(isExample = false) {
    this.general = new SuggestedUserGeneralData(isExample);
    this.match = new SuggestedUserMatchData(isExample);
  }
}

export class SuggestedUser {
  data!: SuggestedUserData;
  firebaseDocument!: FirebaseDocument;
  constructor(isExample = false) {
    this.data = new SuggestedUserData(isExample);
    this.firebaseDocument = new FirebaseDocument(isExample);
  }
}

export class SuggestedUsers {
  data!: SuggestedUser[];
  firebasePagination!: FirebasePagination;
  constructor(isExample = false) {
    this.data = [];
    this.firebasePagination = new FirebasePagination(isExample);
    if (isExample) {
      const add = (isFirstTime = true) => {
        if (Math.random() < 0.5 || isFirstTime) {
          this.data.push(new SuggestedUser(isExample));
          add();
        }
      };
      add();
    }
  }
}
