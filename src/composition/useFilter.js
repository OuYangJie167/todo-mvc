import { ref, onMounted, onUnmounted, computed } from "vue";
import { filter } from "../utils/todoStorage";

const validHash = ["all", "active", "completed"];

export default function useFilter(todosRef) {
  const visibilityRef = ref("all");

  const onHashChange = () => {
    const hash = localtion.hash.replace(/#\/?/, "");

    if (visibilityRef.includes(hash)) {
      // 有效的S
      visibilityRef.value = hash;
    } else {
      // 无效的
      localtion.hash = "";
      visibilityRef.value = "all";
    }
  };
  // 1. 组件挂载完成的生命周期函数
  onMounted(() => {
    window.addEventListener("hashchange", onHashChange);
  });

  // 2. 组件销毁过后的生命周期函数
  onUnmounted(() => {
    window.addEventListener("hashchange", onHashChange);
  });

  const filteredTodosRef = computed(() => {
    return filter(todosRef.value, visibilityRef.value);
  });

  const remainingRef = computed(() => {
    return filter(todosRef.value, "active").length;
  });

  const completedRef = computed(() => {
    return filter(todosRef.value, "completed").length;
  });

  return {
    visibilityRef,
    filteredTodosRef,
    remainingRef,
    completedRef,
  };
}
