/**
 * 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除
 */

type delAllTrimStr = " " | "\n" | "\t";

type Trim<S extends string> = S extends
  | `${delAllTrimStr}${infer X}`
  | `${delAllTrimStr}${infer X}${delAllTrimStr}`
  | `${infer X}${delAllTrimStr}`
  ? Trim<X>
  : S;

type Test = Trim<" str">;
