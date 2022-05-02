<div align="center">
    <h1>FlingYP-Type-Challenges</h1>
</div>

## 类型体操

> TypeScript 类型体操：https://github.com/type-challenges/type-challenges

> 如果 GitHub 访问过慢，可以访问 Gitee 仓库：https://gitee.com/mirrors_trending/type-challenges/tree/main

## 做题收获总结：

### `extends` 关键字

> 在 TS 中，extends 关键字代表着从一个类型扩展出另外一个新类型，这个新类型是原来这个类型的子类型（是扩展的意思，并非继承的意思）

`type Some = A extends B ? C : D` 有时候也可以这么写

### `keyof` 关键字

`type TestKeyof = keyof T`

> 简单的说：keyof 关键字将对象 T 类型的属性的 Key 全部收集起来 组成为一个 Union 联合类型 赋给类型 TestKeyof

```typescript
// 通过 keyof T 如果T类型是一个数组 则组成的会是一个数组索引组成的联合类型
interface KeyOfPerson {
  name: string;
  age: number;
  sex: number;
}
// PersonKeys 类型是一个： "name" | "age" | "sex" 的联合类型
type PersonKeys = keyof KeyOfPerson;
```

### 在 TS 中声明类型时，如何遍历对象类型？

> 参考 00004-easy-pick

```typescript
type MyPick<T, K extends keyof T> = {
  // 遍历的写法： [P in K]
  [P in K]: T[P];
};
```

### Readonly 的使用

> 将类型所有的属性都设置为可读属性

```typescript
interface Person {
  name: string;
  age: number;
  sex: number;
}

type ReadonlyPerson = Readonly<Person>;
// type ReadonlyPerson = {
//   readonly name: string;
//   readonly age: number;
//   readonly sex: number;
// }
```

### as const 断言的类型

> 通过 as const 断言的变量就会变成一个 readonly Type

```typescript
// readonly ["tesla", "model 3", "model X", "model Y"]
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
```

### typeof 关键字

> 获取到变量的类型

### 在 TS 中声明类型时，如何遍历数组类型？

> 参考 00011-easy-tuple-to-object

```typescript
type TupleToObject<T extends readonly any[]> = {
  // 遍历写法：[key in T[number]]
  [key in T[number]]: key;
};
```

### 在 TS 中如果类型是一个数组，获取数组类型长度的方式？

> 参考 00018-easy-tuple-length

```typescript
type Length<T extends readonly any[]> = T["length"];
```

### Exclude 工具类型

> Exclude<UnionType, ExcludedMembers> 从 UnionType 排除 ExcludedMembers 所定义的类型 从而返回一个新的类型

```typescript
type T2 = Exclude<string | number | (() => void), Function>; => type T2 = string | number
```

### 联合类型的遍历

> 参考 00043-easy-exclude。 联合类型的遍历： T extends U ? Type1 : Type2 （想象成联合类型的每一个类型都会进一遍这个三元表达式，因此来进行判断）

```typescript
type MyExclude<T, U> = T extends U ? never : T;
```

### `Awaited<T>` 工具类型

> `Awaited<T>` 是 TS 4.5 新添加的内置工具类型。 可以帮助我们返回 Promise 对象里的类型。https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html

### 关于 00189-easy-awaited 第二种方法的理解

> 关键在于 Infer 关键字的使用，Infer 只能用于条件类型 extends
> [Infer 关键字](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)

```typescript
/**
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
 */

// 第一种答案
// type MyAwaited<T extends Promise<unknown>> = Awaited<T>;

// 第二种答案
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

// 1. Awaited<> 是 TS 4.5 新添加的内置工具类型。 可以帮助我们返回Promise对象里的类型
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html

// 2. Infer 关键字的理解使用

/**
 * 对于第二种答案的理解：要理解Infer关键字的作用 和 递归
 *  1. 我们传给 MyAwaited<T> 的 T 泛型限制了 必须是 Promise 的类型，这样就解决了  type error = MyAwaited<number>; 的爆红问题
 *  2. 在根据 T 限制了必须是 Promise 类型，所以这段代码 T extends Promise<infer X> ? Type1 : Type2  是一定会走 Type1的，因此 Type2 写什么类型都无所谓
 *  3. 进入到 Type1 后，先要理解下 Infer 关键字 在 条件类型 extends 的作用， Infer 是推断的意思，意思就是 假设 Promise<T> 里的泛型的类型 是 X 类型
 *  4. 然后问  X 类型 它是不是也是 Promise 类型 如果是 则进入 MyAwaited<X> 进行递归操作
 *  5. 如果不是Promise类型，则返回这个 X 类型
 */
```

### 关于 00898-easy-includes 答案的理解

```typescript
/**
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，
 * 返回的类型要么是 true 要么是 false。
 */

import { Equal } from "@type-challenges/utils";

// type Includes<T extends readonly any[], U> = any;  //（没做出来）

// 答案：
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false;

// Infer 关键字的理解和使用

// @type-challenges/utils 类型工具的 Equal 类型工具

/**
 * 这道题没有做做出来，关键是没有想过 infer 可以这么写，也没有想到 使用了 Equal，所以对数组类型的遍历 没有思路
 * 1. 和 00189-easy-awaited 的第二种解发思路一样，使用 Infer 和 递归
 * 2. 首先传入的 泛型 T 在经过类型约束： T extends readonly any[]  后，一定不会走到 false的
 * 3. T extends [infer First,...infer Rest] 在这里假设了 T泛型，中的第一个元素的类型是 First 可以看做数学里的（未知数X），其他的类型是 Rest 可以看做数学里的（未知数Y）
 * 4. 然后判断 第一个元素类型First 和 第二个泛型参数的类型是否一致，这里就使用到了Equal： Equal<U, First> extends true。 如果是则直接返回true，就没必要进行后面的递归操作了
 * 5. 如果第一个元素类型参数不一致，就进行递归操作。 其实就是在拿泛型U和泛型T的第一个元素的类型做比较。
 */
```
