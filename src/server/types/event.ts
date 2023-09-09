export type EventTags = {
  main: string;
  side: string[];
};

export type EventOwner = {
  uID: string;
  uName: string;
  uNick: string;
  uPhoto: string;
  isPerson: boolean;
};

export type EventUsers = {
  uCount: number;
  uPhotos: string[];
};

export type PhysicalLocation = {
  isOnline: false;
  address: {
    fullAddress: string;
    description: string;

    country: string;
    city: string;
    district: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
};
export type OnlineLocation = {
  isOnline: true;
  app: string;
  url: string;
};

export type EventConditions = {
  hasUserLimit: boolean;
  hasApproval: boolean;
  hasPrice: boolean;
  hasAge: boolean;

  aIDs: string[];
  userLimit: number;
  age: {
    min: number;
    max: number;
  };
  price: number;
};

export class UserEvent {
  tags!: EventTags;
  owner!: EventOwner;
  users!: EventUsers;
  conditions!: EventConditions;
  location!: OnlineLocation | PhysicalLocation;

  constructor(isOnline: boolean) {
    this.tags = {
      main: "",
      side: [],
    };
    this.owner = {
      uID: "",
      uName: "",
      uNick: "",
      uPhoto: "",
      isPerson: true,
    };
    this.users = {
      uCount: 0,
      uPhotos: [],
    };
    this.conditions = {
      hasUserLimit: false,
      hasApproval: false,
      hasPrice: false,
      hasAge: false,

      aIDs: [],
      userLimit: 0,
      price: 0,
      age: {
        max: 0,
        min: 0,
      },
    };
    if (isOnline)
      this.location = {
        isOnline: isOnline,
        app: "",
        url: "",
      };
    else
      this.location = {
        isOnline: isOnline,
        address: {
          fullAddress: "",
          description: "",

          country: "",
          city: "",
          district: "",
        },
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
      };
  }
}
