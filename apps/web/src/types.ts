export type NonEmptyArray<T> = [T, ...T[]];
export function checkNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
  return arr.length > 0;
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
