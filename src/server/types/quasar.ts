export type ScrollDetail = {
  position: number;
  direction: "up" | "down";
  directionChanged: boolean;
  delta: number;
  inflectionPoint: number;
};
