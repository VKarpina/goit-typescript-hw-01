function merge<T extends object, U extends object>(
  objA: T,
  objB: U
): Omit<T, keyof U> & U {
  return { ...objA, ...objB };
}
