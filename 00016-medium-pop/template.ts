/**
 * 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组
 */

type Pop<T extends any[]> = T extends [...infer First, infer Last]
  ? First
  : never;
