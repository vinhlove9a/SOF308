<template>
  <div>
    <!-- Bài 1 -->
    <div>
      <h2>Bài 1</h2>
      <p>{{ isAdmin ? "Xin chào, Admin" : "Xin chào, người dùng" }}</p>
      <button @click="toggleAdmin">Chuyển đổi</button>
    </div>

    <!-- Bài 2 -->
    <div>
      <h2>Bài 2</h2>
      <table border="1">
        <tr v-for="num in numbers" :key="num">
          <td v-for="i in numbers" :key="i">
            {{ num }} x {{ i }} = {{ num * i }}
          </td>
        </tr>
      </table>
    </div>

    <!-- Bài 3 -->
    <div>
      <h2>Bài 3</h2>
      <ul>
        <li v-for="student in students" :key="student.name">
          {{ student.name }} - {{ student.score >= 5 ? "Đạt" : "Không đạt" }}
        </li>
      </ul>
    </div>

    <!-- Bài 4 -->
    <div>
      <h2>Bài 4</h2>
      <input type="text" v-model="textInput" />
      <p>Giá trị: {{ textInput }}</p>
    </div>

    <!-- Bài 5 -->
    <div>
      <h2>Bài 5</h2>
      <input type="text" v-model="user.name" placeholder="Nhập tên" />
      <input type="number" v-model="user.age" placeholder="Nhập tuổi" />
      <button @click="updateUser">Cập nhật</button>
      <p>Tên: {{ user.name }}, Tuổi: {{ user.age }}</p>
    </div>

    <!-- Bài 6 -->
    <div>
      <h2>Bài 6</h2>
      <p>Số đếm: {{ count }}</p>
      <button @click="count++">Tăng</button>
      <button @click="count--">Giảm</button>
      <button @click="count = 0">Reset</button>
    </div>

    <!-- Bài 7 -->
    <div>
      <h2>Bài 7</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
          <button @click="removeTask(task.id)">Xóa</button>
        </li>
      </ul>
    </div>

    <!-- Bài 8 -->
    <div>
      <h2>Bài 8</h2>
      <input type="text" v-model="newTask" placeholder="Tên nhiệm vụ mới" />
      <button @click="addTask">Thêm nhiệm vụ</button>
    </div>

    <!-- Bài 9 -->
    <div>
      <h2>Bài 9</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <span v-if="!task.isEditing">{{ task.name }}</span>
          <input v-else type="text" v-model="task.name" />
          <button v-if="!task.isEditing" @click="editTask(task)">
            Chỉnh sửa
          </button>
          <button v-else @click="saveTask(task)">Lưu</button>
        </li>
      </ul>
    </div>

    <!-- Bài 10 -->
    <div>
      <h2>Bài 10</h2>
      <input
        type="text"
        v-model="searchKeyword"
        placeholder="Tìm kiếm nhiệm vụ"
      />
      <ul>
        <li v-for="task in filteredTasks" :key="task.id">{{ task.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
// Bài 1
const isAdmin = ref(false);
const toggleAdmin = () => {
  isAdmin.value = !isAdmin.value;
};

// Bài 2
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// Bài 3
const students = ref([
  { name: "Học sinh A", score: 7 },
  { name: "Học sinh B", score: 4 },
  { name: "Học sinh C", score: 9 },
]);

// Bài 4
const textInput = ref("");

// Bài 5
const user = reactive({
  name: "",
  age: null,
});

const updateUser = () => {
  console.log(user);
};

// Bài 6
const count = ref(0);

// Bài 7, 8, 9, 10
const tasks = reactive([
  { id: 1, name: "Nhiệm vụ 1", isEditing: false },
  { id: 2, name: "Nhiệm vụ 2", isEditing: false },
  { id: 3, name: "Nhiệm vụ 3", isEditing: false },
]);
const newTask = ref("");
const searchKeyword = ref("");

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.push({ id: Date.now(), name: newTask.value, isEditing: false });
    newTask.value = "";
  }
};

const removeTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) tasks.splice(index, 1);
};

const editTask = (task) => {
  task.isEditing = true;
};

const saveTask = (task) => {
  task.isEditing = false;
};

const filteredTasks = computed(() => {
  return tasks.filter((task) =>
    task.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});
</script>

<style>
h2 {
  margin-top: 20px;
}
</style>
