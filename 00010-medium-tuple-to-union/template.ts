/**
 * 实现泛型TupleToUnion<T>，它返回元组所有值的合集。
 */

type TupleToUnion<T extends unknown[]> = T[number];
