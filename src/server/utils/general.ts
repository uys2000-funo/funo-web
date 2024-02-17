export const getStringFromHex = function name(number: number) {
  return number.toString(16).padStart(6, "0");
};

export const getHexFromString = function name(number: string) {
  return parseInt(number, 16);
};

export const getRecreatedIndex = function (index: string) {
  return getStringFromHex(getHexFromString(index));
};

type F = (...args: any[]) => any;
export const runLater = function <T extends F>(
  f: T,
  ...p: Parameters<typeof f>
) {
  setTimeout(() => f.apply(null, p));
};

export const cyrb53 = (str: string, seed: number = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};
