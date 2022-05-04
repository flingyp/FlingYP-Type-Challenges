/**
 * 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组
 * @param values
 */

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer X> ? X : T[K];
}>;
