<template>
  <div class="container mt-3">
    <div class="row">
      <ul class="col-12 col-md-6 mb-5 mx-auto list-group">
        <li class="list-group-item text-left">
          🛀 Participants :
          {{ capitalizeFirstLetter(firstName) }}
        </li>
        <li class="list-group-item text-left">
          📅 Date :
          {{ createdAt }}
        </li>
        <li class="list-group-item text-left">
          🏋️‍♂️ Sport avant la baignade :
          {{ physicalActivityBefore ? "Oui" : "Non" }}
        </li>
        <li class="list-group-item text-left">
          ⌛ Temps de récupération :
          <span class="badge badge-primary badge-pill"
            >{{ recoveryTime }} min</span
          >
        </li>
        <li class="list-group-item text-left">
          😅 Afterdrop :
          {{ capitalizeFirstLetter(stressDuringRecovery) }}
        </li>
        <li class="list-group-item text-left">
          🌡 Temperature exterieur :
          <span class="badge badge-primary badge-pill"
            >{{ temperatureOutside }} ℃</span
          >
        </li>
        <li class="list-group-item text-left">
          💧 Temps resté dans l'eau :
          <span class="badge badge-primary badge-pill"
            >{{ timeInWater }} min</span
          >
        </li>
        <li class="list-group-item text-left">
          🌀 Temperature de l'eau :
          <span class="badge badge-primary badge-pill"
            >{{ waterTemperature }} ℃</span
          >
        </li>
        <li class="list-group-item text-left">
          🌦 Météo : {{ capitalizeFirstLetter(weather) }}
        </li>
        <li class="list-group-item text-left">
          🌬 Vent : {{ capitalizeFirstLetter(wind) }}
        </li>
        <li class="list-group-item text-left">
          🙄 Ressenti global : {{ capitalizeFirstLetter(globalFeeling) }}
        </li>
        <li class="list-group-item text-left">
          🤠 Commentaires : {{ commentary }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IcebathDataService from "../services/IcebathDataService";

export default {
  name: "ice-bath-detail",
  data() {
    return {
      createdAt: "",
      firstName: "",
      physicalActivityBefore: "",
      recoveryTime: "",
      stressDuringRecovery: "",
      temperatureOutside: "",
      timeInWater: "",
      waterTemperature: "",
      weather: "",
      wind: "",
      globalFeeling: "",
      commentary: "",
    };
  },
  methods: {
    getIcebath(id) {
      IcebathDataService.get(id)
        .then((response) => {
          console.log(response.data);
          this.createdAt = response.data["createdAt"]
            .substring(0, 10)
            .split("-")
            .reverse()
            .join("-");
          this.firstName = response.data["firstName"];
          this.physicalActivityBefore = response.data["physicalActivityBefore"];
          this.recoveryTime = response.data["recoveryTime"];
          this.stressDuringRecovery = response.data["stressDuringRecovery"];
          this.temperatureOutside = response.data["temperatureOutside"];
          this.timeInWater = response.data["timeInWater"];
          this.waterTemperature = response.data["waterTemperature"];
          this.weather = response.data["weather"];
          this.wind = response.data["wind"];
          this.globalFeeling = response.data["globalFeeling"];
          this.commentary = response.data["commentary"];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  mounted() {
    this.getIcebath(this.$route.params.id);
  },
};
</script>

<style></style>
