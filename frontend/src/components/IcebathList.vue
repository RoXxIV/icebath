<template>
  <div class="row mt-5">
    <div class="col-12 col-md-10 mx-auto">
      <VTable
        class="table"
        :data="icebaths"
        :pageSize="10"
        v-model:currentPage="currentPage"
        @totalPagesChanged="totalPages = $event"
      >
        <template #head>
          <VTh sortKey="firstName" scope="col">Participant</VTh>
          <VTh sortKey="createdAt" scope="col">Date</VTh>
          <VTh sortKey="physicalActivityBefore" scope="col">Sport</VTh>
          <VTh sortKey="timeInWater" scope="col">Durée baignade</VTh>
          <VTh sortKey="waterTemperature" scope="col">Temperature de l'eau</VTh>
          <VTh sortKey="globalFeeling" scope="col">Ressenti</VTh>
        </template>
        <template #body="{ rows }">
          <tr v-for="row in rows" :key="row">
            <td>
              {{
                row.firstName.charAt(0).toUpperCase() + row.firstName.slice(1)
              }}
            </td>
            <td>
              {{
                row.createdAt.substring(0, 10).split("-").reverse().join("-")
              }}
            </td>
            <td>{{ row.physicalActivityBefore ? "oui" : "non" }}</td>
            <td>{{ row.timeInWater }} Min</td>
            <td>
              {{ row.waterTemperature }} ℃
              {{
                row.waterTemperature > 10 ? "&nbsp; &nbsp;🌡" : "&nbsp; &nbsp; ❄"
              }}
            </td>
            <td>
              {{
                row.globalFeeling.charAt(0).toUpperCase() +
                row.globalFeeling.slice(1)
              }}
            </td>
          </tr>
        </template>
      </VTable>
      <VTPagination
        class="mx-auto text-center ml-5"
        v-model:currentPage="currentPage"
        :total-pages="totalPages"
      />
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
tr:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
</style>
