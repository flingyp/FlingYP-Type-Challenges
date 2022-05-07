/**
 * 实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，
 * 其中新返回的字符串删除了原字符串开头的空白字符串。
 */

type delStr = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${delStr}${infer X}`
  ? TrimLeft<X>
  : S;
