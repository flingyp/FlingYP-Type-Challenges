/**
 * 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型
 */

type Last<T extends any[]> = T extends [...infer First, infer Last]
  ? Last
  : First<any>;
