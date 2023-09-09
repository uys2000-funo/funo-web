export class FirebaseDocument {
  ctimestamp!: number;
  utimestamp!: number;
  dtimestamp!: number;

  requestCount!: number;
  updateCount!: number;

  creatorId!: string;
  ownerId!: string;

  constructor() {
    this.ctimestamp = Date.now();
    this.utimestamp = 0;
    this.dtimestamp = 0;
    this.requestCount = 0;
    this.updateCount = 0;
    this.creatorId = "anonymous";
    this.ownerId = "anonymous";
  }
}
