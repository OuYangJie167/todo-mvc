const LOCAL_KEY = "todomvc";

/**
 * 生成一个任务的唯一编号，时间戳+4位随机数
 */
export function generateId() {
  return Date.now() + Math.random().toString(16).substring(2, 4);
}

/**
 * 获取当前所有任务
 */
export function fetch() {
  const result = localStorage.getItem(LOCAL_KEY);
  console.log(result);
  if (result && result === undefined) {
    return JSON.parse(result);
  }
  return [];
}
/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}

export function filter(todos, visibility = "all") {
  if (visibility === "all") {
    return todos;
  } else if (visibility === "active") {
    return todos.filter((it) => !it.completed);
  } else if (visibility === "completed") {
    return todos.filter((it) => it.completed);
  }

  throw new Error("Invalid visibility value");
}
