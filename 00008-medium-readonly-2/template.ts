/**
 * 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
 * K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
 */

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

type TestMyReadonly2 = MyReadonly2<Todo1, "title" | "description">;

/**
 * 这道题在做了 00003-medium-omit 题后应该就可以写出 readonly [P in keyof T as P extends K ? P : never]: T[P]; 这段代码来
 * 以及知道泛型是可以提供默认值： K = XXX
 * 关键点在于 & 连接符 （花了大量时间，没有想到这个点）
 */
