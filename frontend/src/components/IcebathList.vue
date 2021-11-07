<template>
  <div class="row my-3">
    <div
      v-for="bath in icebaths.slice(0, items)"
      :key="bath._id"
      class="col-12 col-md-2 my-2"
    >
      <router-link
        style="text-decoration: none; color: inherit"
        :to="`/ice-baths/${bath._id}`"
        class="card"
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
          {{ weather(bath.weather) }}
        </li>
      </router-link>
    </div>
    <div v-if="icebaths.length > 12" class="col-12 text-center mt-3">
      <button @click="showMore" class="btn btn-primary">Afficher plus</button>
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
      items: 12,
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
    weather(data) {
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
    showMore() {
      this.items += 12;
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
  font-size: 2em;
}
</style>
