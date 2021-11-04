<template>
  <p>hi</p>
</template>

<script>
import IcebathDataService from "./../services/IcebathDataService";

export default {
  name: "ice-bath-list",
  data() {
    return {
      icebaths: [],
    };
  },
  methods: {
    retrieveIcebath() {
      IcebathDataService.getAll()
        .then((response) => {
          this.icebaths = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveIcebath();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
