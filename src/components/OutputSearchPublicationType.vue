<template>
  <div>
    <p
      v-if="!data.isRestrictedByPublicationType && !data.isRestrictedByLanguage"
    >
      {{
        selectRandom([
          "No publication type or language restrictions were applied.",
          "We did not apply restrictions to publication type or language.",
          "All publication types and languages were included in the search."
        ])
      }}
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
        We included studies in the following languages:
        {{ joinArrayWithAnd(formatSelectMulti(data.includedLanguages)) }}.
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
  name: "OutputSearchPublicationType",
  mixins: [OutputMixin],
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
