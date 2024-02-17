export class FirebaseDocument {
  /**
   * Object Create Timestamp
   */
  ctimestamp!: number;
  /**
   * Object Update Timestamp
   */
  utimestamp!: number;
  /**
   * Object Delete Timestamp
   */
  dtimestamp!: number;

  requestCount!: number;
  updateCount!: number;

  creatorId!: string;
  ownerId!: string;
  /**
   * FirebaseDocument Object
   * @param {boolean} isExample - Creates a example FirebaseDocument
   */
  constructor(example = false) {
    this.ctimestamp = Date.now();
    this.utimestamp = 0;
    this.dtimestamp = 0;

    this.requestCount = 0;
    this.updateCount = 0;

    this.creatorId = "";
    this.ownerId = "";
    if (example) {
      this.ctimestamp = Date.now();
      this.utimestamp = 0;
      this.dtimestamp = 0;

      this.requestCount = 0;
      this.updateCount = 0;

      this.creatorId = "_uID";
      this.ownerId = "_uID";
    }
  }
}

export class FirebasePagination {
  startDate!: number;
  count!: number;
  direction?: "desc" | "asc";
  /**
   * FirebasePagination Object
   * @param {boolean} isExample - Creates a example FirebasePagination
   */
  constructor(isExample = false) {
    this.startDate = Date.now();
    this.count = 0;
    this.direction = "desc";

    if (isExample) {
      this.count = 10;
    }
  }
}
