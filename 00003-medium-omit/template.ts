/**
 * 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
 * Omit 会创建一个省略 K 中字段的 T 对象。
 */

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

/**
 * 这道题如果之前没有写过这种写法，可能一时半会就像不到这种写法
 * 这段代码要拆开看：[P in keyof T as P extends K ? never: P]: （T[P]; => P in keyof T） 和 （P extends K ? never: P）
 * P in keyof T as P extends K ? never : P： 就是先判断每一个属性P 是不是 extends K 。 如果是则 as 断言下 这个T一定是never， 如果不是则 as 断言 这个 P in keyof P 就是自己。
 * 从而达到筛选属性的目的
 */
