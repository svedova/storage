/**
 * @file Setup file for mocks. Prepare stuff here before launching tests.
 */
const storageMock = () => {
  let store = {};
  let isFull = false;

  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      if (isFull) {
        throw new Error("Storage is full");
      }

      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: key => delete store[key],
    isFull: val => {
      isFull = val;
    } // Mock function to tell that the storage is full
  };
};

Object.defineProperty(window, "localStorage", {
  value: storageMock(),
  writable: false
});

Object.defineProperty(window, "sessionStorage", {
  value: storageMock(),
  writable: false
});
