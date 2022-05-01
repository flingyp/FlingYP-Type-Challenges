/**
 * 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型
 */

type First<T extends any[]> = T extends [] ? never : T[0];

// 类型的三元表达式：T extends Type ? Type1 : Type2;
