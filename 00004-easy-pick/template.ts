/**
 * 实现 TS 内置的 Pick<T, K>，但不可以使用它。
 * 从类型 T 中选择出属性 K，构造成一个新的类型。
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// [P in K] TS中的对象类型的遍历
// TS 联合类型 union 的类型约束
// extends的使用

// keyof关键字： （例子：type TestKeyof = keyof T） keyof 关键字将对象T类型的属性的Key全部收集起来 组成为一个联合类型 赋给 TestKeyof
// 通过 keyof T 如果T类型是一个数组 则组成的会是一个数组索引组成的联合类型
interface KeyOfPerson {
  name: string;
  age: number;
  sex: number;
}
// PersonKeys 类型是一个： "name" | "age" | "sex" 的联合类型
type PersonKeys = keyof KeyOfPerson;
