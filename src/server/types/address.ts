export type Address = {
  text: string;

  city: string;
  district: string;
  country: string;

  coordinate: {
    latitude: number;
    longitude: number;
  };
};
