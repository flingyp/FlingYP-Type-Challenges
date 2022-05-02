/**
 * 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档：https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
 *
 * 就是获取 函数泛型T 回调函数中的 参数类型
 */

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? X
  : never;
