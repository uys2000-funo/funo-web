import { FirebaseDocument } from "./firebase";

export class CreateUserBody {
  user!: IndividualUser | EnterpriseUser;
  password!: string;
  photoURL!: string;
}

export class IndividualUser {
  general: {
    name: string;
    surname: string;
    phone: string;
    birthdate: number;
    gender: boolean;
  };
  account: {
    name: string;
    mail: string;
  };
  interests: {
    main: string[];
    side: string[];
  };
  firebase: FirebaseDocument;

  constructor() {
    this.general = {
      name: "",
      surname: "",
      phone: "",
      birthdate: 0,
      gender: true,
    };
    this.account = {
      name: "",
      mail: "",
    };
    this.interests = {
      main: [""],
      side: [""],
    };
    this.firebase = {
      ctimestamp: 0,
      utimestamp: 0,
      dtimestamp: 0,

      requestCount: 0,
      updateCount: 0,

      creatorId: "",
      ownerId: "",
    };
  }
}
export class EnterpriseUser {
  general: {
    name: string;
    taxNumber: string;
    phone: string;
    address: string;
  };
  account: {
    name: string;
    mail: string;
  };
  interests: {
    main: string[];
    side: string[];
  };
  firebase: FirebaseDocument;

  constructor() {
    this.general = {
      name: "",
      taxNumber: "",
      phone: "",
      address: "",
    };
    this.account = {
      name: "",
      mail: "",
    };
    this.interests = {
      main: [""],
      side: [""],
    };
    this.firebase = {
      ctimestamp: 0,
      utimestamp: 0,
      dtimestamp: 0,

      requestCount: 0,
      updateCount: 0,

      creatorId: "",
      ownerId: "",
    };
  }
}
