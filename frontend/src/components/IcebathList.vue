<template>
  <div class="row my-3">
    <div
      v-for="bath in icebaths.slice(0, bathCard).reverse()"
      :key="bath._id"
      class="col-10 col-sm-6 col-md-3 my-2 mx-auto"
    >
      <router-link
        style="text-decoration: none; color: inherit"
        :to="`/ice-baths/${bath._id}`"
        class="card"
        :class="{
          warning: bath.globalFeeling == 'dur',
        }"
      >
        <li class="card-header">
          <h4>
            {{
              bath.firstName.charAt(0).toUpperCase() + bath.firstName.slice(1)
            }}
          </h4>
        </li>
        <li class="mt-2">
          <span :class="{ cold: bath.waterTemperature <= 10 }">
            {{ bath.waterTemperature }} ℃
          </span>
        </li>
        <li>{{ bath.timeInWater }} Min</li>
        <li>
          {{ bath.createdAt.substring(0, 10).split("-").reverse().join("-") }}
        </li>
        <li class="mb-2 weatherIcon">
          {{ displayWeatherAsEmoji(bath.weather) }}
        </li>
      </router-link>
    </div>
    <div v-if="icebaths.length > 8" class="col-12 text-center mt-3">
      <button @click="showMoreBathCards" class="btn btn-primary">
        Afficher plus
      </button>
    </div>
  </div>
</template>

<script>
import IcebathDataService from "./../services/IcebathDataService";

export default {
  name: "ice-bath-list",
  data() {
    return {
      icebaths: [],
      totalPages: 1,
      currentPage: 1,
      bathCard: 8,
    };
  },
  methods: {
    retrieveIcebath() {
      IcebathDataService.getAll()
        .then((response) => {
          this.icebaths = response.data;
          // console.log(response.data);
          // console.log(this.icebaths);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    displayWeatherAsEmoji(data) {
      switch (data) {
        case "partiellement nuageux":
          return "⛅";
        case "nuageux":
          return "☁";
        case "ensoleillé":
          return "☀";
        case "pluie":
          return "🌧";
        case "neige":
          return "🌨";
        case "tempête":
          return "🌪";

        default:
          return "meteo non indiqué*";
      }
    },
    showMoreBathCards() {
      this.bathCard += 8;
    },
  },
  mounted() {
    this.retrieveIcebath();
  },
};
</script>

<style>
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
h4 {
  margin: 0;
}
li {
  text-align: center;
  margin: 0;
}

.cold {
  color: rgb(43, 210, 251);
  font-size: 1.1em;
}
.weatherIcon {
  font-size: 2.3em;
}
.warning {
  -webkit-box-shadow: inset 1px 1px 10px 2px rgba(53, 198, 255, 0.2);
  box-shadow: inset 1px 1px 10px 2px rgba(53, 198, 255, 0.2);
}
</style>
