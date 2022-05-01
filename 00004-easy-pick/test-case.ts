import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

const needTodo: Todo = {
  title: "代做事项1",
  description: "代做事项1-描述",
  completed: false,
};

const needTodo2: MyPick<Todo, "title" | "description"> = {
  title: "代做事项2",
  description: "描述",
};
