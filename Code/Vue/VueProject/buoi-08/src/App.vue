<template>
  <div class="title">
    <h2>LESSON 8</h2>
    <div class="bai1">
      <!-- Tao 1  doi tuong sanPham gom cac thuoc tinh
    id - number, ten - String, mauSac - String, gia - number
    Hien thi danh sach doi tuong san pham theo cac dinh dang sau
    1. Hien thi duoi dang table
    2. Hien thi duoi dang cbb
    3. Hien thi duoi dang ul, li
    --></div>
    <div class="viewTable">
      <h3>View Table</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">ten</th>
            <th scope="col">mau sac</th>
            <th scope="col">gia</th>
          </tr>
        </thead>
        <tbody v-for="(sp, index) in sanPhams" :key="index">
          <tr>
            <th scope="row">{{ sp.id }}</th>
            <td>{{ sp.ten }}</td>
            <td>{{ sp.mauSac }}</td>
            <td>{{ sp.gia }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="viewCBB">
      <h3>View CBB</h3>
      <select class="form-select" aria-label="Default select example">
        <option v-for="(sp, index) in sanPhams" :key="index">
          {{ sp.ten }}
        </option>
      </select>
    </div>
    <div class="viewUL_LI">
      <ul>
        <li v-for="(sp, index) in sanPhams" :key="index">
          <p>{{ sp.id }}</p>
          <p>{{ sp.ten }}</p>
          <p>{{ sp.mauSac }}</p>
          <p>{{ sp.gia }}</p>
        </li>
      </ul>
    </div>
    <div class="checkLogin">
      <p>{{ isLogin ? `Da dang nhap` : `Chua dang nhap` }}</p>
      <button @click="checkLogin">Swap</button>
    </div>
    <div class="changeStatus">
      <p>{{ status }}</p>
      <button @click="changeStatus">Change</button>
    </div>
  </div>
  <div class="changeStatus2">
    <p v-if="status === 'active'">active</p>
    <p v-else-if="status === 'away'">away</p>
    <p v-else>busy</p>
    <!-- <p>{{ status === 'active' ? 'Trang thai hoat dong' : status === 'away' ? 'Trang thai vang mat' : 'Trang thai ban' }}</p> -->
  </div>
  <div class="caculator">
    <input type="number" v-model="number1" />
    <input type="number" v-model="number2" />
    <button @click="tinhSum">Sum</button>
    <button @click="tinhSub">Sub</button>
    <p>Sum: {{ sum }}</p>
    <p>Sub: {{ sub }}</p>
  </div>
</template>
<script setup>
const number1 = ref(0);
const number2 = ref(0);
const sum = ref(0);
const sub = ref(0);
function tinhSum() {
  sum.value = number1.value + number2.value;
}
function tinhSub() {
  sub.value = number1.value - number2.value;
}

import { ref } from "vue";

const sanPhams = ref([
  { id: 1, ten: "Iphone 12", mauSac: "Den", gia: 1000 },
  { id: 2, ten: "Iphone 11", mauSac: "Trang", gia: 900 },
  { id: 3, ten: "Iphone 10", mauSac: "Xanh", gia: 800 },
  { id: 4, ten: "Iphone 9", mauSac: "Do", gia: 700 },
  { id: 5, ten: "Iphone 8", mauSac: "Vang", gia: 600 },
]);

const isLogin = ref(false);
function checkLogin() {
  isLogin.value = !isLogin.value;
}

const status = ref("active");
function changeStatus() {
  if (status.value === "active") {
    status.value = "away";
  } else if (status.value === "away") {
    status.value = "busy";
  } else {
    status.value = "active";
  }
}
</script>
<style>
.viewTable h3 {
  margin-top: 20px;
  color: red;
}
.viewCBB h3 {
  margin-top: 20px;
  color: red;
}
.viewUL_LI h3 {
  margin-top: 20px;
  color: red;
}
</style>
