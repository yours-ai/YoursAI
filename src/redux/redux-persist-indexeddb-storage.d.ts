/* eslint-disable */

declare module "redux-persist-indexeddb-storage" {
  export interface Storage {
    getItem(key: string, ...args: Array<any>): any;
    setItem(key: string, value: any, ...args: Array<any>): any;
    removeItem(key: string, ...args: Array<any>): any;
  }

  export default function createIndexedDBStorage(
    dbName: string,
    storeName?: string,
  ): Storage;
}
