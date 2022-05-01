/**
 * 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来
 */

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key;
};

// 1. 字面量类型
// tuple 的类型是 string[]
// const tuple = ["tesla", "model 3", "model X", "model Y"]

// 通过 as const 断言tuple类型就是： readonly ["tesla", "model 3", "model X", "model Y"]
// const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// 2. typeof 的使用

// 3. 怎么在TS中去遍历一个数组类型
// [key in T[number]]
