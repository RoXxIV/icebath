<template>
  <VTable :data="icebaths" class="table">
    <template #head>
      <th>Participant</th>
      <th>Date</th>
      <th>Sport</th>
      <th>Durée baignade</th>
      <th>Temperature de l'eau</th>
      <th>Temperature ambiante</th>
      <th>Météo</th>
      <th>Vent</th>
      <th>Récupération</th>
      <th>Stress récupération</th>
      <th>Ressenti</th>
      <th>Commentaires</th>
    </template>
    <template #body="{ rows }">
      <tr v-for="row in rows" :key="row">
        <td>{{ row.firstName }}</td>
        <td>{{ row.createdAt }}</td>
        <td>{{ row.physicalActivityBefore }}</td>
        <td>{{ row.timeInWater }} Min</td>
        <td>{{ row.waterTemperature }} ℃</td>
        <td>{{ row.temperatureOutside }} ℃</td>
        <td>{{ row.weather }}</td>
        <td>{{ row.wind }}</td>
        <td>{{ row.recoveryTime }} Min</td>
        <td>{{ row.stressDuringRecovery }}</td>
        <td>{{ row.globalFeeling }}</td>
        <td>...</td>
      </tr>
    </template>
  </VTable>
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

<style></style>
