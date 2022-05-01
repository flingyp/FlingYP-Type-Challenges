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
