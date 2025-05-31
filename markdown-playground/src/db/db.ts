import Dexie from "dexie";

export interface Setting {
  key: string;
  value: string;
}

export interface Document {
  id: string;
  content: string;
}

class MarkdownDB extends Dexie {
  settings!: Dexie.Table<Setting, string>;
  documents!: Dexie.Table<Document, string>;

  constructor() {
    super("MarkdownPlayground");

    this.version(1).stores({
      settings: "&key",
      documents: "id",
    });
  }
}

export const db = new MarkdownDB();
