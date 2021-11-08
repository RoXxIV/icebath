<template>
  <div class="container mt-3">
    <h2 class="text-center">Dernieres baignades</h2>
    <IcebathList />
  </div>
</template>

<script>
// @ is an alias to /src
import IcebathList from "../components/IcebathList.vue";

export default {
  name: "ice-bath-list-view",
  components: {
    IcebathList,
  },
};
</script>
<style></style>
