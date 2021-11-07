<template>
  <div class="container mt-3">
    <div class="row">
      <ul class="col-12 col-md-6 my-5 mx-auto list-group">
        <li class="list-group-item text-left">
          🛀 Participants: {{ currentIcebath.firstName }}
        </li>
        <li class="list-group-item text-left">
          📅 Date: {{ currentIcebath.createdAt }}
        </li>
        <li class="list-group-item text-left">
          🙄 Ressenti global: {{ currentIcebath.globalFeeling }}
        </li>
        <li class="list-group-item text-left">
          🏋️‍♂️ Sport avant la baignade:
          {{ currentIcebath.physicalActivityBefore }}
        </li>
        <li class="list-group-item text-left">
          ⌛ Temps de récupération:
          <span class="badge badge-primary badge-pill">{{
            currentIcebath.recoveryTime
          }}</span>
        </li>
        <li class="list-group-item text-left">
          😅 Stress pendant la récupération:
          {{ currentIcebath.stressDuringRecovery }}
        </li>
        <li class="list-group-item text-left">
          🌡 Temperature exterieur:
          <span class="badge badge-primary badge-pill">{{
            currentIcebath.temperatureOutside
          }}</span>
        </li>
        <li class="list-group-item text-left">
          💧 Temps resté dans l'eau:
          <span class="badge badge-primary badge-pill">{{
            currentIcebath.timeInWater
          }}</span>
        </li>
        <li class="list-group-item text-left">
          🌀 Temperature de l'eau:
          <span class="badge badge-primary badge-pill">{{
            currentIcebath.waterTemperature
          }}</span>
        </li>
        <li class="list-group-item text-left">
          🌦 Météo: {{ currentIcebath.weather }}
        </li>
        <li class="list-group-item text-left">
          🌬 Vent: {{ currentIcebath.wind }}
        </li>
        <li class="list-group-item text-left">
          🤠 Commentaires: {{ currentIcebath.commentary }}
        </li>
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
