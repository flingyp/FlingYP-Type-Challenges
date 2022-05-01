/**
 * 不要使用内置的Readonly<T>，自己实现一个。
 * 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
 * 也就是不可以再对该对象的属性赋值。
 */

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// 1. 了解 Readonly 类型
// 2. 了解 readonly 关键字
// 3. 了解 keyof 的使用
