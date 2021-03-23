<template>
  <span>
    {{
      `(${formatAuthors(authors)
        .filter(author => author)
        .join(" ")} ${year}. ${title}.)`
    }}
  </span>
</template>

<script>
export default {
  props: {
    title: String,
    authors: Array[String],
    year: Number
  },
  methods: {
    formatAuthors(arr) {
      return arr.map(author => {
        author = author.split(" ");
        if (author[1]) return `${author[1]} ${author[0].charAt(0)}.,`;
        else if (author[0]) return author[0];
      });
    }
  }
};
</script>
