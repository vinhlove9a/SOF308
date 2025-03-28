<template>
  <!-- <div class="title">
    <h1>LESSON 8</h1>
  </div> -->
  <div class="tblNhanVien">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Tên</th>
          <th scope="col">Tuổi</th>
          <th scope="col">Giới tính</th>
          <th scope="col">EXP Years</th>
        </tr>
      </thead>
      <tbody v-for="nhanVien in nhanViens" :key="nhanVien.ten">
        <tr>
          <td>{{ nhanVien.ten }}</td>
          <td>{{ nhanVien.tuoi }}</td>
          <td>{{ nhanVien.gioiTinh ? "Nam" : "Nữ" }}</td>
          <td>{{ nhanVien.soNamLamViec }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const nhanViens = ref([
  {
    ten: "Nguyen Van A",
    tuoi: 20,
    gioiTinh: true,
    soNamLamViec: 5,
  },
  {
    ten: "Nguyen Van B",
    tuoi: 25,
    gioiTinh: false,
    soNamLamViec: 3,
  },
  {
    ten: "Nguyen Van C",
    tuoi: 30,
    gioiTinh: true,
    soNamLamViec: 10,
  },
  {
    ten: "Nguyen Van D",
    tuoi: 35,
    gioiTinh: false,
    soNamLamViec: 7,
  },
  {
    ten: "Nguyen Van E",
    tuoi: 40,
    gioiTinh: true,
    soNamLamViec: 15,
  },
]);
</script>

<style>
h1 {
  text-align: center;
  color: red;
}
</style>
