export const debounce = (cb: (value: string) => Promise<boolean>, time: number) => {
  let timer: NodeJS.Timeout;
  let callCount = 0;
  let lastPromises: Promise<unknown>[] = [];

  return (value: string) => {
    callCount += 1;

    const promise = new Promise((resolve, reject) => {
      const selfCallCount = callCount;

      clearTimeout(timer);
      timer = setTimeout(() => {
        for (let i = 0; i < selfCallCount; i++) {
          Promise.resolve(lastPromises[i]);
        }

        cb(value).then(resolve).catch(reject);
      }, time);
    });

    lastPromises[callCount] = promise;
  };
};
