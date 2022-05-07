/**
 * 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样
 */

interface LowercaseLetter {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
}

type MyCapitalize<S extends string> = S extends `${infer F}${infer X}`
  ? F extends keyof LowercaseLetter
    ? `${LowercaseLetter[F]}${X}`
    : S
  : "";

/**
 * 1. VScode快速多选光标：Shift+Alt+鼠标左键 快速选择同一列
 */
