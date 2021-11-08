<template>
<div class="container mt-3"><div class="row mb-5">
    <div v-if="!submitted" class="col-12 col-md-6 mx-auto">
      <!------------Global informations------------>
      <fieldset>
        <legend>Participants</legend>
        <!-------name------->
        <div>
            <div class="form-check form-check-inline">
                <label class="form-check-label mr-2" for="firstName">Evan</label>
                <input
                class="form-check-input"
                type="radio"
                id="firstName"
                name="firstName"
                value="evan"
                v-model="icebath.firstName"
                />
            </div>
            <div class="form-check form-check-inline">
                <label class="form-check-label mr-2" for="firstName">Teddy</label>
                <input
                class="form-check-input"
                type="radio"
                id="firstName"
                name="firstName"
                value="teddy"
                v-model="icebath.firstName"
                />
            </div>
          </div>
        </fieldset>
        <!------------Before iceBath------------>
        <fieldset>
          <legend class="my-2">Avant la baignade</legend>
          <!-------Physical Activity Before------->
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="physicalActivityBefore"
              name="physicalActivityBefore"
              v-model="icebath.physicalActivityBefore"
            />
            <label class="form-check-label" for="physicalActivityBefore">
              Tu as pratiqué une activité physique juste avant la baignade
              </label>
          </div>
        </fieldset>
        <!------------During iceBath------------>
        <fieldset>
          <legend class="my-2">Baignade</legend>
          <!--waterTemperature-->
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" for="waterTemperature">Temperature de l'eau</span>
            </div>
              <input
                type="text"
                id="waterTemperature"
                class="form-control" aria-label="température de l'eau"
                name="waterTemperature"
                v-model="icebath.waterTemperature"
                placeholder="℃"
              />
            
          </div>
          <!-------timeInWater------->
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text" for="timeInWater">Temps resté dans l'eau</span>
            </div>
              
              <input 
                type="text" 
                id="timeInWater"
                class="form-control"
                aria-label="Temps resté dans l'eau" 
                name="timeInWater" 
                v-model="icebath.timeInWater"
                placeholder="Minutes"
                  />

          </div>
        </fieldset>
        <!------------weather------------>
        <fieldset>
          <legend class="my-2">Météo</legend>
          <!-------temperatureOutside------->
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" for="temperatureOutside">Temperature ambiante</span>
            </div>
            
              <input
                type="text"
                id="temperatureOutside"
                class="form-control"
                aria-label="Temperature ambiante"
                name="temperatureOutside"
                v-model="icebath.temperatureOutside"
                placeholder="℃"
              />
            
          </div>
          <!-------weather------->
          <div class="input-group mb-3">
            <select class="custom-select" name="weather" id="weather" v-model="icebath.weather">
              <option value="" disabled selected>Choisir une option</option>
              <option value="partiellement nuageux">
                Partiellement nuageux
              </option>
              <option value="nuageux">Nuageux</option>
              <option value="ensoleillé">Ensoleillé</option>
              <option value="pluie">Pluie</option>
              <option value="neige">Neige</option>
              <option value="tempête">Tempête</option>
            </select>
            <div class="input-group-append">
            <label class="input-group-text" for="weather">Météo</label>
            </div>
          </div>
          <!-------wind------->
          <div class="input-group">
            <select class="custom-select" name="wind" id="wind" v-model="icebath.wind">
              <option value="" disabled selected>Choisir une option</option>
              <option value="aucun">Aucun</option>
              <option value="leger">Leger</option>
              <option value="modéré">Modéré</option>
              <option value="beaucoup">Beaucoup</option>
            </select>
            <div class="input-group-append">
            <label class="input-group-text" for="weather">Vent</label>
            </div>
          </div>
        </fieldset>
        <!------------recovery------------>
        <fieldset>
          <legend class="my-2">Récupération</legend>
          <!-------recoveryTime------->
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" for="recoveryTime">Temps de récupération</span>
            </div>
              <input 
                type="text" 
                id="recoveryTime" 
                class="form-control"
                aria-label="Temps de récupération" 
                name="recoveryTime" 
                v-model="icebath.recoveryTime"
                placeholder="Minutes"
                  />
          </div>
          <!-------stressDuringRecovery------->
          <div class="input-group mb-3">
            <select
              class="custom-select"
              name="feelings"
              id="stressDuringRecovery"
              v-model="icebath.stressDuringRecovery"
            >
              <option value="" disabled selected>Choisir une option</option>
              <option value="intense">Très intense</option>
              <option value="intense">Intense</option>
              <option value="modéré">Modéré</option>
              <option value="peu">Peu</option>
              <option value="aucun">Aucun</option>
            </select>
            <div class="input-group-append">
            <label class="input-group-text" for="stressDuringRecovery">Afterdrop</label>
            </div>
          </div>
          <!-------globalFeeling------->
          <div class="input-group mb-3">
            <select class="custom-select" name="feelings" id="globalFeeling" v-model="icebath.globalFeeling">
              <option value="" disabled selected>Choisis une option</option>
              <option value="très dur">Très dur</option>
              <option value="dur">Dur</option>
              <option value="modéré">Modéré</option>
              <option value="facile">Facile</option>
              <option value="très facile">Très facile</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text" for="globalFeeling">Ressenti global de la baignade</label>
            </div>
          </div>
          <!-------Commentary------->
          <div class="form-floating mb-3">
            <label for="commentary">Commentaires</label>
            <textarea
              class="form-control"
              id="commentary"
              name="commentary"
              rows="3"
              cols="22"
              v-model="icebath.commentary"
              placeholder="Facultatif"
            ></textarea>
          </div>
        </fieldset>
        <!-------Commentary------->
        <button @click="saveIcebath" class="btn btn-primary">Enregistrer</button>
        <p v-if="errors.length">
          <b>Merci de corriger les erreurs:</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
      </div>

        <div class="col-12 col-md-10 mx-auto text-center" v-else>
            <h4>Ta baignade a bien été enregistré!</h4>
            <button class="btn btn-primary my-3" @click="newIcebath">Ajouter une baignade</button>
            <img :src='image' class="mt-4">
        </div>
    </div></div>
  
</template>

<script>
import IcebathDataService from "../services/IcebathDataService";
import image from "../assets/dataSaved.png"
export default {
  name: "add-ice-bath",
  data() {
    return {
      icebath: {
        id: null,
        firstName: [],
        physicalActivityBefore: false,
        waterTemperature: "",
        timeInWater: "",
        temperatureOutside: "",
        weather: "",
        wind: "",
        recoveryTime: "",
        stressDuringRecovery: "",
        globalFeeling: "",
        commentary: "",
      },
      errors: [],
      submitted: false,
      image: image

    };
  },
  methods: {
    saveIcebath() {
      // errors handling
      this.errors = [];
      if (this.icebath.firstName.length == 0) {
        this.errors.push("veuillez indiquer un participant");
        return false;
      }
      if (this.icebath.waterTemperature) {
        if (isNaN(this.icebath.waterTemperature)) {
          this.errors.push("veuillez indiquer une température valide");
          return false;
        }
      } else {
        this.errors.push("veuillez indiquer une température");
        return false;
      }
      if (this.icebath.timeInWater) {
        if (isNaN(this.icebath.timeInWater)) {
          this.errors.push(
            'veuillez indiquer un "Temps resté dans l\'eau" valide en minutes'
          );
          return false;
        }
      } else {
        this.errors.push("veuillez indiquer le Temps resté dans l'eau");
        return false;
      }
      if (this.icebath.temperatureOutside) {
        if (isNaN(this.icebath.temperatureOutside)) {
          this.errors.push("veuillez indiquer une température ambiante valide");
          return false;
        }
      } else {
        this.errors.push("veuillez indiquer une température ambiante");
        return false;
      }
      if (!this.icebath.weather) {
        this.errors.push("veuillez indiquer la météo");
        return false;
      }
      if (!this.icebath.wind) {
        this.errors.push("veuillez indiquer le vent");
        return false;
      }
      if (this.icebath.recoveryTime) {
        if (isNaN(this.icebath.recoveryTime)) {
          this.errors.push("veuillez indiquer un temps de récupération valide");
          return false;
        }
      } else {
        this.errors.push("veuillez indiquer un temps de récupération");
        return false;
      }
      if (!this.icebath.stressDuringRecovery) {
        this.errors.push(
          "veuillez indiquer votre stress pendant la récupération"
        );
        return false;
      }
      if (!this.icebath.globalFeeling) {
        this.errors.push("veuillez indiquer votre ressenti général");
        return false;
      }

      var data = {
        firstName: this.icebath.firstName,
        physicalActivityBefore: this.icebath.physicalActivityBefore,
        waterTemperature: this.icebath.waterTemperature,
        timeInWater: this.icebath.timeInWater,
        temperatureOutside: this.icebath.temperatureOutside,
        weather: this.icebath.weather,
        wind: this.icebath.wind,
        recoveryTime: this.icebath.recoveryTime,
        stressDuringRecovery: this.icebath.stressDuringRecovery,
        globalFeeling: this.icebath.globalFeeling,
        commentary: this.icebath.commentary,
      };
      console.log(data);
      IcebathDataService.create(data)
        .then((response) => {
          this.icebath.id = response.data.id;
          console.log("response", response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
      this.errors = [];
    },
    newIcebath() {
      this.submitted = false;
      this.icebath = {};
      console.log("icebath:", this.icebath, this.errors, this.submitted);
    },
  },
};
</script>
<style>
</style>