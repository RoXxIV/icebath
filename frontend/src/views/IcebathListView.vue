<template>
  <div class="container mt-3"><banner /> <IcebathList /></div>
</template>

<script>
// @ is an alias to /src
import IcebathList from "../components/IcebathList.vue";
import Banner from "../components/Banner.vue";
export default {
  name: "ice-bath-list-view",
  components: {
    IcebathList,
    Banner,
  },
};
</script>
<style></style>
