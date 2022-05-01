<div align="center">
    <h1>FlingYP-Type-Challenges</h1>
</div>

## 类型体操

> TypeScript 类型体操：https://github.com/type-challenges/type-challenges

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
