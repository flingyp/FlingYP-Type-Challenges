/**
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型
 */

type MyReturnType<T> = T extends (...x: any[]) => infer X ? X : never;

/**
 * 依然是使用 Infer 关键字来假设有类型 X，以及使用了剩余参数
 */
