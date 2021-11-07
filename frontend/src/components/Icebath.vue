<template>
  <div class="container mt-3">
    <div class="row">
      <ul class="col-12 col-md-6 my-5 mx-auto">
        <li>Participants: {{ currentIcebath.firstName }}</li>
        <li>Date: {{ currentIcebath.createdAt }}</li>
        <li>Ressenti global: {{ currentIcebath.globalFeeling }}</li>
        <li>
          Sport avant la baignade: {{ currentIcebath.physicalActivityBefore }}
        </li>
        <li>Temps de récupération: {{ currentIcebath.recoveryTime }}</li>
        <li>
          Stress pendant la récupération{{
            currentIcebath.stressDuringRecovery
          }}
        </li>
        <li>Temperature exterieur: {{ currentIcebath.temperatureOutside }}</li>
        <li>Temps resté dans l'eau: {{ currentIcebath.timeInWater }}</li>
        <li>Temperature de l'eau: {{ currentIcebath.waterTemperature }}</li>
        <li>Météo: {{ currentIcebath.weather }}</li>
        <li>Vent: {{ currentIcebath.wind }}</li>
        <li>Commentaires: {{ currentIcebath.commentary }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import IcebathDataService from "./../services/IcebathDataService";

export default {
  name: "ice-bath-list",
  data() {
    return {
      currentIcebath: "",
    };
  },
  methods: {
    getIcebath(id) {
      IcebathDataService.get(id)
        .then((response) => {
          this.currentIcebath = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getIcebath(this.$route.params.id);
  },
};
</script>

<style></style>
