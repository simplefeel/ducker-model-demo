<template>
  <div id="app">
    <h1>使用数据模型之前</h1>
    <Card></Card>
    <hr/>
    <h1>使用数据模型之后</h1>
    <CardModel></CardModel>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import CardModel from "./components/CardModel.vue";

export default {
  name: "app",
  components: {
    Card,
    CardModel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
