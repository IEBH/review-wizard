<template>
  <div>
      <PanelMenu :model="items" />
  </div>
</template>

<script>
import PanelMenu from 'primevue/panelmenu';

export default {
  name: 'TheSidebar',
  components: {
    PanelMenu
  },
  data() {
    return {
      items: [
        {
          label: 'Method',
          items: [
            {
              label: 'Picot',
              icon: 'pi pi-file',
              to: '/method/picot'
            },
            {
              label: 'Search Strategy',
              icon: 'pi pi-search',
              to: '/method/searchStrategy'
            },
            {
              label: 'Study Selection and Screening',
              icon: 'pi pi-upload',
              to: '/method/screening'
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
