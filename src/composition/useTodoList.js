import { ref, watchEffect } from "vue";
import * as todoStorage from "../utils/todoStorage";

export default function useTodoList() {
  const todoRef = ref(todoStorage.fetch());
  watchEffect(() => {
    todoStorage.save(todoRef.value);
  });

  return {
    todoRef,
  };
}
