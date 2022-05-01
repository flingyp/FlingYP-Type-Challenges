/**
 * 实现内置的Exclude <T, U>类型，但不能直接使用它本身
 * 从联合类型T中排除U的类型成员，来构造一个新的类型
 */

type MyExclude<T, U> = T extends U ? never : T;

// 1. 了解 Exclude<UnionType, ExcludedMembers>  从 UnionType 排除 ExcludedMembers 所定义的类型 从而返回一个新的类型
// type T2 = Exclude<string | number | (() => void), Function>; => type T2 = string | number

// 2. 联合类型的遍历： T extends U ? Type1 : Type2  （想象成联合类型的每一个类型都会进一遍这个三元表达式，因此来进行判断）

// 测试：type TestExclude = MyExclude<string | number | boolean, string | number>;
