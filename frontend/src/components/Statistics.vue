<template>
  <div class="row my-3">
    <div class="col-12 col-md-6">
      <ul class="list-group">
        <li class="list-group-item"><h4>Teddy</h4></li>
        <li class="list-group-item">
          Temps totale dans l'eau : {{ totalTimeInWater("teddy") }}
        </li>
        <li class="list-group-item">
          Temps moyen dans l'eau : {{ AverageTimeInWater("teddy") }}
        </li>
        <li class="list-group-item">
          Temperature de l'eau la plus basse :
          {{ lowestTemperature("teddy") }}
        </li>
        <li class="list-group-item">
          Temperature moyenne : {{ AverageWaterTemperature("teddy") }}
        </li>
        <li class="list-group-item">Ressenti globale :</li>
      </ul>
    </div>

    <div class="col-12 col-md-6">
      <ul class="list-group">
        <li class="list-group-item"><h4>Evan</h4></li>
        <li class="list-group-item">
          Temps totale dans l'eau : {{ totalTimeInWater("evan") }}
        </li>
        <li class="list-group-item">
          Temps moyen dans l'eau : {{ AverageTimeInWater("evan") }}
        </li>
        <li class="list-group-item">
          Temperature de l'eau la plus basse : {{ lowestTemperature("evan") }}
        </li>
        <li class="list-group-item">
          Temperature moyenne : {{ AverageWaterTemperature("evan") }}
        </li>
        <li class="list-group-item">Ressenti globale :</li>
      </ul>
    </div>
  </div>
</template>

<script>
import IcebathDataService from "./../services/IcebathDataService";

export default {
  name: "statistics",
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
          console.log(this.icebaths);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    totalTimeInWater(firstName) {
      let totalTime = 0;
      const convert = (n) =>
        `0${(n / 60) ^ 0}`.slice(-2) +
        " h " +
        ("0" + (n % 60)).slice(-2) +
        " min";
      for (let i = 0; i < this.icebaths.length; i++) {
        if (this.icebaths[i]["firstName"] == firstName)
          totalTime += this.icebaths[i]["timeInWater"];
      }

      return convert(totalTime);
    },
    AverageTimeInWater(firstName) {
      let totalTime = 0;
      let index = 0;
      let averageTime = 0;

      for (let i = 0; i < this.icebaths.length; i++) {
        if (this.icebaths[i]["firstName"] == firstName) {
          totalTime += this.icebaths[i]["timeInWater"];
          index++;
        }
      }
      averageTime = Math.round(totalTime / index);

      return averageTime + "min";
    },
    lowestTemperature(firstName) {
      let totalTemperatures = [];
      for (let i = 0; i < this.icebaths.length; i++) {
        if (this.icebaths[i]["firstName"] == firstName) {
          totalTemperatures.push(this.icebaths[i]["waterTemperature"]);
        }
      }
      return totalTemperatures.sort((a, b) => a - b).shift() + " ℃";
    },
    AverageWaterTemperature(firstName) {
      let totalTemperature = 0;
      let index = 0;
      let averageTemperature = 0;

      for (let i = 0; i < this.icebaths.length; i++) {
        if (this.icebaths[i]["firstName"] == firstName) {
          totalTemperature += this.icebaths[i]["timeInWater"];
          index++;
        }
      }
      averageTemperature = Math.round(totalTemperature / index);

      return averageTemperature + " ℃";
    },
  },

  mounted() {
    this.retrieveIcebath();
    this.totalTimeInWater();
  },
};
</script>

<style></style>
