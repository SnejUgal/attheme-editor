const SCHEME: { [key: string]: any } = {
  themes: {
    autoIncrement: true,
  },
  settings: {
    keyPath: `option`,
  },
};

export default (database: IDBDatabase) =>
  new Promise(resolve => {
    const objectStoresAmount = Object.keys(SCHEME).length;

    let completedAmount = 0;

    const resolver = () => {
      completedAmount++;

      if (completedAmount === objectStoresAmount) {
        resolve();
      }
    };

    for (const objectStoreName in SCHEME) {
      const objectStore = database.createObjectStore(
        objectStoreName,
        SCHEME[objectStoreName],
      );

      objectStore.oncomplete = resolver;
    }
  });
