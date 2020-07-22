<template>
  <div>
      <h1>PICOT</h1>
      <!-- P -->
      <InputTextSingleLineMulti 
        question="What is the population, or problem (P), of your systematic review, (e.g. older people with diabetes)."
        :value="picot.populationInclude"
        @input="updateField('populationInclude', $event)"
      />
      <InputTextSingleLineMulti 
        question="Are there any populations or problems that will be excluded, (e.g. children on ventilator support). "
        :value="picot.populationExclude"
        @input="updateField('populationExclude', $event)"
      />

      <!-- I -->
      <InputTextSingleLineMulti 
        question="What is the intervention (I) of your systematic review, (e.g. metformin)."
        :value="picot.interventionInclude"
        @input="updateField('interventionInclude', $event)"
      />
      <InputTextSingleLineMulti 
        question="Are there any interventions that will be excluded, (e.g. exercise)."
        :value="picot.interventionExclude"
        @input="updateField('interventionExclude', $event)"
      />

      <!-- C -->
      <InputTextSingleLineMulti 
        question="What is the comparator (C) that the intervention will be compared against"
        :value="picot.comparatorInclude"
        @input="updateField('comparatorInclude', $event)"
      />
      <InputTextSingleLineMulti 
        question="Will any comparators be excluded (e.g. no treatment)"
        :value="picot.comparatorExclude"
        @input="updateField('comparatorExclude', $event)"
      />

      <!-- O -->
      <InputTextSingleLineMulti 
        question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
        :value="picot.outcomesInclude"
        @input="updateField('outcomesInclude', $event)"
      />
      <InputTextSingleLineMulti 
        question="Will any outcomes be excluded (e.g. self reported feeling better, reduction in pain scores, improved fatigue levels)"
        :value="picot.outcomesExclude"
        @input="updateField('outcomesExclude', $event)"
      />

      <!-- T -->
      <InputSelectMulti
        question="What study types (T) will be included"
        :options="typesOptions"
        :value="picot.typesInclude"
        @input="updateField('typesInclude', $event)"
      />
      <InputSelectMulti
        question="Will any study types be excluded"
        :options="typesOptions"
        :value="picot.typesExclude"
        @input="updateField('typesExclude', $event)"
      />

      <div class="p-mt-3 p-d-flex p-jc-center">
        <Button
          label="Generate Output"
          @click="openModal()"
        />
      </div>

      <!-- Modal to display output -->
      <Dialog header="PICOT" :visible.sync="displayModal" :style="{width: '50vw'}" :modal="true">
        <span v-html="modalText"></span>
      </Dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
var revmanReplicant = require('revman-replicant-browser');
import { picotGrammar } from '../assets/templates/method'
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputTextSingleLineMulti from './InputTextSingleLineMulti.vue'
import InputSelectMulti from './InputSelectMulti.vue'

export default {
  name: 'ViewMethodPicot',
  components: {
    Button,
    Dialog,
    InputTextSingleLineMulti,
    InputSelectMulti
  },
  computed: mapState({
    picot: state => state.method.doc.picot
  }),
  methods: {
    updateField(field, value) {
      console.log(value);
      this.$store.dispatch('method/set', {
        picot: { [field]: value }
      });
    },
    openModal() {
      revmanReplicant({
        revman: this.picot,
        grammar: picotGrammar,
      }, (err, res) => {
        // Use res html in v-html of modal
        if (err) console.log(err);
        this.modalText = res;
        this.displayModal = true;
      });
    },
    closeModal() {
      this.displayModal = false;
    }
  },
  data() {
    return{
      displayModal: false,
      modalText: "",
      typesOptions: [
        "Systematic Reviews",
        "Observational Studies",
        "Randomized Controlled Trials",
        "Cohort Studies",
        "Longitudinal studies",
        "Before after studies",
        "Surveys",
        "Letters",
        "Editorials"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
