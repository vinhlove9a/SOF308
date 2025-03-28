<template>
  <div>
    <h1>LESSON 7</h1>
    <h1>{{ number }}</h1>
    <button @click="clickButton">Click me</button>
    <!-- de cap nhap lai gia tri va duoc cap nhap vao DOM
     => reactivity: VUE se theo doi su thay doi cua state (bien) de cap nhap lai gia tri nay bang 2 cach: 
     Cach 1: dung ref => muon lay gia tri .value (khuyen dung)
     cach 2: dung reactive
     Tai sao phai dung ref ?
     1.ref co the dung trong template
     2.Neu gia tri thay doi => DOM se tu dong cap nhap
      -->
    number1: <input type="text" v-model="number1" /> number2:
    <input type="text" v-model="number2" />
    <button @click="sum">sum</button>
    <button @click="sub">sub</button>
    <h1>{{ ketQua }}</h1>
    <div class="nhanVien">
      <h1>Nhan Vien</h1>
      <p>Ma NV: {{ Nhanvien.maNV }}</p>
      <p>Ten NV: {{ Nhanvien.tenNV }}</p>
      <p>Tuoi: {{ Nhanvien.tuoi }}</p>
      <p>Dia Chi: {{ Nhanvien.diaChi }}</p>
    </div>
    <div class="sinhVien">
      <h1>Sinh Vien</h1>
      <p>Ma SV: {{ SinhVien.maSV }}</p>
      <p>Ten SV: {{ SinhVien.tenSV }}</p>
      <p>Tuoi: {{ SinhVien.tuoi }}</p>
      <p>Truong Hoc: {{ SinhVien.truongHoc }}</p>
      <p>Nganh Hoc: {{ SinhVien.nganhHoc }}</p>
    </div>
    <div class="thucVat">
      <h1>Thuc vat</h1>
      <ul>
        <li v-for="item in mangThucVat" :key="item.maTV">
          <p>Ma TV: {{ item.maTV }}</p>
          <p>Ten: {{ item.ten }}</p>
          <p>Tuoi: {{ item.tuoi }}</p>
        </li>
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ma</th>
          <th>Ten</th>
          <th>Tuoi</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tv in mangThucVat" :key="tv.ma">
          <tr>
            <td>{{ tv.maTV }}</td>
            <td>{{ tv.ten }}</td>
            <td>{{ tv.tuoi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <select name="mangThucVat" id="">
      <option v-for="tv in mangThucVat" :key="tv.maTV" :value="tv.maTV">
        {{ tv.ten }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
//khai bao bthg nhu js se khong cap nhap lai DOM => dung ref
let number = ref(0);
const clickButton = () => {
  number.value++;
  console.log(number);
};
const number1 = ref(0);
const number2 = ref(0);
const ketQua = ref(0);
const sum = () => {
  ketQua.value =
    Number.parseInt(number1.value, 10) + Number.parseInt(number2.value, 10);
};
const sub = () => {
  ketQua.value = number1.value - number2.value;
};

const Nhanvien = {
  maNV: "NV01",
  tenNV: "Nguyen Van A",
  tuoi: 20,
  diaChi: "Ha Noi",
};

const SinhVien = {
  maSV: "SV01",
  tenSV: "Tran Xuan Vinh",
  tuoi: 20,
  truongHoc: "FPT POLYTECHNIC",
  nganhHoc: "Tho xay",
};

const mangThucVat = ref([
  { maTV: "TV01", ten: "Cay Xanh", tuoi: 1000 },
  { maTV: "TV02", ten: "Cay Tim", tuoi: 2000 },
  { maTV: "TV03", ten: "Cay Vang", tuoi: 3000 },
]);
</script>

<style></style>
