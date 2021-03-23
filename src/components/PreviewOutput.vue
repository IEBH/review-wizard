<template>
  <Accordion style="margin-top: 50px; border: 1px solid black;">
    <AccordionTab header="Output" :active="true">
      <component :is="component" :data="data" :key="monitorChange" />
      <Button label="Rewrite" @click="reload" />
    </AccordionTab>
  </Accordion>
</template>

<script>
import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import OutputAssesmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias";

export default {
  props: {
    component: Object,
    data: Object
  },
  components: {
    Accordion,
    AccordionTab,
    Button,
    OutputAssesmentOfTheRiskOfBias
  },
  data() {
    return {
      monitorChange: 0
    };
  },
  methods: {
    reload() {
      this.monitorChange += 1;
    }
  }
};
</script>
