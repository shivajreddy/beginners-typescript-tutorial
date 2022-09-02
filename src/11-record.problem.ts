import { expect, it } from "vitest";

interface CacheInterface {
  [id: string]: string;
}

const createCache = () => {
  // solution
  // const cache: Record<string, string> = {};
  // solution 2
  // const cache: { [key: string]: string } = {};
  //solution 3
  const cache: CacheInterface = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
  cache.remove("123");
  expect(cache.cache["123"]).toEqual(undefined);
});

it("Should remove values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});

const createCache2 = () => {
  // an object that can have keys and values both as strings
  const cache: Record<number, string> = {};

  // Method to add key
  const add = (id: number, value: string) => {
    cache[id] = value;
  };

  // Method to remove a key,value pair
  const remove = (id: number) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

// Using partial
interface Todo {
  id: number;
  task: string;
}

function addTodo(todo: Todo): Todo {
  return todo;
}
function updateTodo(todo: Todo, parts: Partial<Todo>): Todo {
  return { ...todo, ...parts };
}

const task1: Todo = { id: 1, task: "take dog for a walk" };

const updated = updateTodo(task1, { task: "take sunny to walk" });
console.log("task1 = ", task1);
console.log("updated = ", updated);
