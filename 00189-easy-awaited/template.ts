/**
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 */

type MyAwaited<T extends Promise<unknown>> = Awaited<T>;

// 1. Awaited<> 是 TS 4.5 新添加的内置工具类型。 可以帮助我们返回Promise对象里的类型
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html
