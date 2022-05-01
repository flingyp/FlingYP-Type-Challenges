/**
 * 创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度
 */

type Length<T extends readonly any[]> = T["length"];

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;

type LengthTesla = Length<typeof tesla>;

// 1. 在TS中获取数组类型的长度方式： T["length"]
