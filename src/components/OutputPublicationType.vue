<template>
  <div>
    <p
      v-if="!data.isRestrictedByPublicationType && !data.isRestrictedByLanguage"
    >
      No publication type or language restrictions were applied.
    </p>
    <p v-else>
      <span v-if="data.isRestrictedByPublicationType">
        Restrictions were applied to the publication types.
        {{
          capitalize(
            joinArrayWithAnd(
              formatSelectMulti(data.excludedPublicationTypes)
            ).toLowerCase()
          )
        }}
        were excluded from the search.
      </span>
      <span v-else>
        No publication type restrictions were applied.
      </span>
      <span v-if="data.isRestrictedByLanguage">
        Restrictions were applied to languages.
        {{ joinArrayWithAnd(formatSelectMulti(data.includedLanguages)) }}
        were the only included languages.
      </span>
      <span v-else>
        No restrictions on language were applied.
      </span>
    </p>
  </div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
  name: "OutputPublicationType",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
