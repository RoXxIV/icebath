<template>
    <div class="row">
        <div v-if="!submitted" class="col-12 col-md-8 mx-auto">

            <!------------Global informations------------>
            <fieldset>
                <legend>Participant</legend>
                <!-------name------->
                <div class="my-2">
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
            <legend>Avant la baignade</legend>
            <!-------Physical Activity Before------->
            <div class="form-check my-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="physicalActivityBefore"
                name="physicalActivityBefore"
                v-model="icebath.physicalActivityBefore"
              />
              <label class="form-check-label" for="physicalActivityBefore"
                >Tu as pratiqué une activité physique juste avant la baignade</label
              >
            </div>
          </fieldset>

          <hr>

          <!------------During iceBath------------>
          <fieldset>
            <legend>Baignade</legend>
            <!--waterTemperature-->
            <div class="mb-3">
              <label for="waterTemperature">Temperature de l'eau</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  id="waterTemperature"
                  class="form-control-sm"
                  name="waterTemperature"
                  v-model="icebath.waterTemperature"
                  placeholder="℃"
                />
              </div>
            </div>
            <!-------timeInWater------->
            <div class="mb-3">
              <label for="timeInWater">Temps resté dans l'eau Min</label>
              <div class="input-group mb-3">
                <input 
                  type="text" 
                  id="timeInWater"
                  class="form-control-sm" 
                  name="timeInWater" 
                  v-model="icebath.timeInWater"
                  placeholder="Minutes"
                   />
              </div>
            </div>
          </fieldset>
          <hr>
          <!------------weather------------>
          <fieldset>
            <legend>Météo</legend>
            <!-------temperatureOutside------->
            <div class="mb-3">
              <label for="temperatureOutside">Temperature ambiante</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  id="temperatureOutside"
                  class="form-control-sm"
                  name="temperatureOutside"
                  v-model="icebath.temperatureOutside"
                  placeholder="℃"
                />
              </div>
            </div>
            <!-------weather------->
            <div class="mb-3">
              <label for="weather">Météo</label>
              <select class="custom-select" name="weather" id="weather" v-model="icebath.weather">
                <option disabled selected>Choisir une option</option>
                <option value="partiellement nuageux">
                  Partiellement nuageux
                </option>
                <option value="nuageux">Nuageux</option>
                <option value="ensoleillé">Ensoleillé</option>
                <option value="pluie">Pluie</option>
                <option value="neige">Neige</option>
                <option value="tempête">Tempête</option>
              </select>
            </div>
            <!-------wind------->
            <div class="mb-3">
              <span class="mr-3">Vent:</span>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="wind"
                  name="wind"
                  value="aucun"
                  v-model="icebath.wind"
                />
                <label class="form-check-label" for="wind">Aucun</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="wind"
                  name="wind"
                  value="leger"
                  v-model="icebath.wind"
                />
                <label class="form-check-label" for="wind">Leger</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  id="wind"
                  name="wind"
                  value="beaucoup"
                  v-model="icebath.wind"
                />
                <label class="form-check-label" for="wind">Beaucoup</label>
              </div>
            </div>
          </fieldset>

          <hr>

          <!------------recovery------------>
          <fieldset>
            <legend>Récupération</legend>
            <!-------recoveryTime------->
            <div class="mb-3">
              <label for="recoveryTime">Temps de récupération</label>
              <div class="input-group mb-3">
                <input 
                  type="text" 
                  id="recoveryTime" 
                  class="form-control-sm" 
                  name="recoveryTime" 
                  v-model="icebath.recoveryTime"
                  placeholder="Minutes"
                   />
              </div>
            </div>
            <!-------stressDuringRecovery------->
            <div class=" mb-3">
              <label for="stressDuringRecovery"
                >Stress pendant la récupération</label
              >
              <select
                class="custom-select"
                name="feelings"
                id="stressDuringRecovery"
                v-model="icebath.stressDuringRecovery"
              >
                <option disabled selected>Choisir une option</option>
                <option value="intense">Intense</option>
                <option value="modéré">Modéré</option>
                <option value="peu">Peu</option>
                <option value="aucun">Aucun</option>
              </select>
            </div>
            <!-------globalFeeling------->
            <div class="mb-3">
              <label for="globalFeeling">Ressenti global de la baignade</label>
              <select class="custom-select" name="feelings" id="globalFeeling" v-model="icebath.globalFeeling">
                <option disabled selected>Choisis une option</option>
                <option value="très dur">Très dur</option>
                <option value="dur">Dur</option>
                <option value="modéré">Modéré</option>
                <option value="facile">Facile</option>
                <option value="très facile">Très facile</option>
              </select>
            </div>
            <!-------Commentary------->
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                id="commentary"
                name="commentary"
                rows="3"
                cols="22"
                v-model="icebath.commentary"
              ></textarea>
              <label for="commentary">Commentaires</label>
            </div>
          </fieldset>

            <button @click="saveIcebath" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newIcebath">Add</button>
        </div>
    </div>
</template>

<script>
// import IcebathDataService from "../services/IcebathDataService";
export default {
    name: "add-ice-bath",
    data() {
        return {
            icebath: {
                firstName: [],
                physicalActivityBefore:false,
                waterTemperature:"",
                timeInWater:"",
                temperatureOutside:"",
                weather:"",
                wind:"",
                recoveryTime:"",
                stressDuringRecovery:"",
                globalFeeling:"",
                commentary:"",
            },
            submitted: false
        };
    },
    methods: {
        saveIcebath() {
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
            }
            console.log(data)
        }
    }
}
</script>