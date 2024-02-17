export class PhysicalAddress {
  text!: string;
  description!: string;

  place!: string;
  city!: string;
  district!: string;
  country!: string;

  coordinate!: {
    latitude: number;
    longitude: number;
  };
  constructor(isExample = false) {
    this.text = "";
    this.description = "";

    this.place = "";
    this.city = "";
    this.district = "";
    this.country = "";

    this.coordinate = {
      latitude: 39.925533,
      longitude: 32.866287,
    };
    if (isExample) {
      this.text = "Ankara, Çankaya, Yücetepe, Akdeniz Cd. No:31";
      this.description = "Tören Alanında";

      this.place = "Anıtkabir";
      this.city = "Ankara";
      this.district = "Çankaya";
      this.country = "Türkiye";

      this.coordinate = {
        latitude: 39.925533,
        longitude: 32.866287,
      };
    }
  }
}

export class OnlineAddress {
  app!: string;
  url!: string;
  description!: string;
  constructor(isExample = false) {
    this.app = "";
    this.url = "";
    this.description = "";
    if (isExample) {
      this.app = "Web Application";
      this.url = "https://mehmetuysal.dev";
      this.description = "Site içersinde ki linkten uygulamaya girebilirsiniz";
    }
  }
}
