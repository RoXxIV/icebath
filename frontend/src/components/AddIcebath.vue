<template>
    <div class="row">
        <div v-if="!submitted" class="col-12 col-md-8 mx-auto">

            <!------------Global informations------------>
            <fieldset>
                <legend>Informations générales</legend>
                <!-------name------->
                <div class="mb-3">
                    <span class="mr-3">Prenom</span>
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
            <hr>
             <!------------Before iceBath------------>
          <fieldset>
            <legend>Avant la baignade</legend>
            <!-------Empty stomack------->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="onEmptyStomack"
                name="onEmptyStomack"
                v-model="icebath.onEmptyStomack"
              />
              <label class="form-check-label" for="onEmptyStomack"
                >A Jeun</label
              >
            </div>
            <!-------Hours of sleep------->
            <div class="mb-3">
                <span>Heures de sommeil:</span>
                <br>
                <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="hoursOfSleep"
                    name="hoursOfSleep"
                    value="moins de 5"
                    v-model="icebath.hoursOfSleep"
                    />
                    <label class="form-check-label" for="hoursOfSleep"
                    >Moins de 5h</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="hoursOfSleep"
                    name="hoursOfSleep"
                    value="5"
                    v-model="icebath.hoursOfSleep"
                    />
                    <label class="form-check-label" for="hoursOfSleep">5h</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="hoursOfSleep"
                    name="hoursOfSleep"
                    value="6"
                    v-model="icebath.hoursOfSleep"
                    />
                    <label class="form-check-label" for="hoursOfSleep">6h</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="hoursOfSleep"
                    name="hoursOfSleep"
                    value="7"
                    v-model="icebath.hoursOfSleep"
                    />
                    <label class="form-check-label" for="hoursOfSleep">7h</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="hoursOfSleep"
                    name="hoursOfSleep"
                    value="8"
                    v-model="icebath.hoursOfSleep"
                    />
                    <label class="form-check-label" for="hoursOfSleep">8h</label>
                </div>
                <div class="form-check form-check-inline">
                    <input
                    class="form-check-input"
                    type="radio"
                    id="hoursOfSleep"
                    name="hoursOfSleep"
                    value="plus de 8"
                    v-model="icebath.hoursOfSleep"
                    />
                    <label class="form-check-label" for="hoursOfSleep"
                    >Plus de 8h</label
                    >
                </div>
            </div>
            <!-------Hours of sleep------->
            <div class="form-check mb-3">
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
            <!-------Before Bath Commentary------->
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                id="beforeBathCommentary"
                name="beforeBathCommentary"
                rows="3"
                cols="22"
                v-model="icebath.beforeBathCommentary"
              ></textarea>
              <label for="beforeBathCommentary">Commentaires</label>
            </div>
          </fieldset>

          <hr>

          <!------------During iceBath------------>
          <fieldset>
            <legend>Pendant la baignade</legend>
            <!--waterTemperature-->
            <div class="mb-3">
              <label for="waterTemperature">Temperature de l'eau</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  id="waterTemperature"
                  name="waterTemperature"
                  v-model="icebath.waterTemperature"
                />
                <span class="input-group-text">°</span>
              </div>
            </div>
            <!-------timeInWater------->
            <div class="mb-3">
              <label for="timeInWater">Temps resté dans l'eau</label>
              <div class="input-group mb-3">
                <input type="text" id="timeInWater" name="timeInWater" v-model="icebath.timeInWater" />
                <span class="input-group-text">Min</span>
              </div>
            </div>
            <!-------globalFeeling------->
            <div class="form-floating mb-3">
              <select class="form-select" name="feelings" id="globalFeeling" v-model="icebath.globalFeeling">
                <option disabled selected>Choisis une option</option>
                <option value="très dur">Très dur</option>
                <option value="dur">Dur</option>
                <option value="modéré">Modéré</option>
                <option value="facile">Facile</option>
                <option value="très facile">Très facile</option>
              </select>
              <label for="globalFeeling">Ressenti</label>
            </div>
            <!-------duringBathCommentary------->
            <div class="form-floating mb-3">
              <label for="duringBathCommentary">Commentaires</label>
              <textarea
                class="form-control"
                id="duringBathCommentary"
                name="duringBathCommentary"
                rows="3"
                cols="22"
                v-model="icebath.duringBathCommentary"
              ></textarea>
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
                  name="temperatureOutside"
                  v-model="icebath.temperatureOutside"
                /><span class="input-group-text">°</span>
              </div>
            </div>
            <!-------weather------->
            <div class="form-floating mb-3">
              <select class="form-select" name="weather" id="weather" v-model="icebath.weather">
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
              <label for="weather">Météo</label>
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
            <!-------weatherCommentary------->
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                id="weatherCommentary"
                name="weatherCommentary"
                rows="3"
                cols="22"
                v-model="icebath.weatherCommentary"
              ></textarea>
              <label for="weatherCommentary">Commentaires</label>
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
                <input type="text" id="recoveryTime" name="recoveryTime" v-model="icebath.recoveryTime" />
                <span class="input-group-text">Min</span>
              </div>
            </div>
            <!-------Hot drink------->
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="hotDrink"
                name="hotDrink"
                value="true"
                v-model="icebath.hotDrink"
              />
              <label class="form-check-label" for="hotDrink"
                >Boisson chaude</label
              >
            </div>
            <!-------stressDuringRecovery------->
            <div class="form-floating mb-3">
              <select
                class="form-select"
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
              <label for="stressDuringRecovery"
                >Stress pendant la récupération</label
              >
            </div>
            <!-------afterBathCommentary------->
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                id="afterBathCommentary"
                name="afterBathCommentary"
                rows="3"
                cols="22"
                v-model="icebath.afterBathCommentary"
              ></textarea>
              <label for="afterBathCommentary">Commentaires</label>
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
                onEmptyStomack:false,
                hoursOfSleep: "",
                physicalActivityBefore:false,
                beforeBathCommentary: "",
                waterTemperature:"",
                timeInWater:"",
                globalFeeling:"",
                duringBathCommentary:"",
                temperatureOutside:"",
                weather:"",
                wind:"",
                weatherCommentary:"",
                recoveryTime:"",
                hotDrink:false,
                stressDuringRecovery:"",
                afterBathCommentary:"",
            },
            submitted: false
        };
    },
    methods: {
        saveIcebath() {
            var data = {
                firstName: this.icebath.firstName,
                onEmptyStomack: this.icebath.onEmptyStomack,
                hoursOfSleep: this.icebath.hoursOfSleep,
                physicalActivityBefore: this.icebath.physicalActivityBefore,
                beforeBathCommentary: this.icebath.beforeBathCommentary,
                waterTemperature: this.icebath.waterTemperature,
                timeInWater: this.icebath.timeInWater,
                globalFeeling: this.icebath.globalFeeling,
                duringBathCommentary: this.icebath.duringBathCommentary,
                temperatureOutside: this.icebath.temperatureOutside,
                weather: this.icebath.weather,
                wind: this.icebath.wind,
                weatherCommentary: this.icebath.weatherCommentary,
                recoveryTime: this.icebath.recoveryTime,
                hotDrink: this.icebath.hotDrink,
                stressDuringRecovery: this.icebath.stressDuringRecovery,
                afterBathCommentary: this.icebath.afterBathCommentary,
            }
            console.log(data)
        }
    }
}
</script>