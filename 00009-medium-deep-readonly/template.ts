/**
 * 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。
 * 您可以假设在此挑战中我们仅处理对象。数组，函数，类等都无需考虑。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。
 */

// 没有做出来，这是我的答案。
// 总结： 完成了递归，但是 T[P] extends object 也包括了 function 所以 a: () => 22 也被递归了进去
// 参考答案使用了 Record 关键字 T[P] extends Record<string, unknown>
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
// };

// 参考答案
// T[P] extends Record<string, unknown> 也就限制了 {"string": unknown}
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> | Array<unknown>
    ? DeepReadonly<T[P]>
    : T[P];
};

// Record<K，T> 关键字的使用： 构造一个对象类型，其属性键为 Keys，其属性值为 Type
