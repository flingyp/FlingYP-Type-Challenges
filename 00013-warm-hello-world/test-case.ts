/**
 * @type-challenges/utils 类型体操提供的一个测试用例库
 * Expect<NotAny<HelloWorld>>： 意思是 断言 HelloWorld 不是一个 any类型
 * Expect<Equal<HelloWorld, string>>： 意思是 断言 HelloWorld 是一个 string类型
 */
import type { Equal, Expect, NotAny } from "@type-challenges/utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
