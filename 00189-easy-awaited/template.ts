/**
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 */

// 第一种答案
// type MyAwaited<T extends Promise<unknown>> = Awaited<T>;

// 第二种答案
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

// 1. Awaited<> 是 TS 4.5 新添加的内置工具类型。 可以帮助我们返回Promise对象里的类型
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html

// 2. Infer 关键字的理解使用

/**
 * 对于第二种答案的理解：要理解Infer关键字的作用 和 递归
 *  1. 我们传给 MyAwaited<T> 的 T 泛型限制了 必须是 Promise 的类型，这样就解决了  type error = MyAwaited<number>; 的爆红问题
 *  2. 在根据 T 限制了必须是 Promise 类型，所以这段代码 T extends Promise<infer X> ? Type1 : Type2  是一定会走 Type1的，因此 Type2 写什么类型都无所谓
 *  3. 进入到 Type1 后，先要理解下 Infer 关键字 在 条件类型 extends 的作用， Infer 是推断的意思，意思就是 假设 Promise<T> 里的泛型的类型 是 X 类型
 *  4. 然后问  X 类型 它是不是也是 Promise 类型 如果是 则进入 MyAwaited<X> 进行递归操作
 *  5. 如果不是Promise类型，则返回这个 X 类型
 */
