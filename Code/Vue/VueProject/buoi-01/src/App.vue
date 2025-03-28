<!-- 
1. tong quan ve vuejs
2. cau truc cua 1 project vue: pom <=> pakage.json 
3.cau truc 1 file vue - SFC -single file component
-->
<script setup>
const msg = "hihihihihihihihihihi";
const button = "<button>Submit</button>";
const table = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
`;
function handleClick() {
  alert("Hello Vue");
}
//ES5, ES6 => arrow function =>
const testFunction = () => {
  alert("Hello Vue");
};
</script>
<template>
  <div>
    <h1>Hello VueJS</h1>
    <p>{{ msg }}</p>
    <div v-html="button"></div>
    <div v-html="table"></div>
    <!-- cach goi function 1 -->
    <button v-on:click="handleClick">Click1</button> <br />
    <!-- cach goi function 2 -->
    <button @click="handleClick">Click2</button> <br> 
    <button @click="testFunction">Click3</button>
  </div>
</template>

<style>
h1:hover {
  text-decoration: underline;
  text-align: center;
}
</style>
