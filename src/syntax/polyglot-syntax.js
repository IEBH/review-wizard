import "brace/mode/text";

export class PolyglotHighlightRules extends window.ace.acequire(
  "ace/mode/text_highlight_rules"
).TextHighlightRules {
  constructor() {
    super();
    var keywordMapper = this.createKeywordMapper(
      {
        keyword: "AND|OR|NOT",
        "support.type": "*|?|%"
      },
      "text",
      true
    );

    this.$rules = {
      start: [
        {
          token: "comment",
          regex: /^\s*#/,
          next: "qcomment"
        },
        {
          token: "string",
          regex: '"(?=.)',
          next: "qstring"
        },
        {
          token: "constant.language",
          regex: /\[mesh\]/,
          caseInsensitive: true
        },
        {
          token: "constant.language",
          regex: /\[mesh:noexp\]/,
          caseInsensitive: true
        },
        {
          token: "constant.language",
          regex: /\[majr\]/,
          caseInsensitive: true
        },
        {
          token: "constant.language",
          regex: /\[mesh major topic\]/,
          caseInsensitive: true
        },
        {
          token: "variable",
          regex: /\[[a-z]{2,4}\]/
        },
        {
          token: "paren.lparen",
          regex: "[\\[({]"
        },
        {
          token: "paren.rparen",
          regex: "[\\])}]"
        },
        {
          token: "constant.language",
          regex: /exp .+?\//
        },
        {
          token: "string.interpolated",
          // eslint-disable-next-line no-useless-escape
          regex: /\<.+?\>/
        },
        {
          token: "keyword.other",
          regex: /\*/
        },
        {
          token: "keyword",
          regex: /\badj[0-9]+\b/
        },
        {
          token: "variable.parameter",
          // eslint-disable-next-line no-dupe-keys
          token: "*"
        },
        {
          token: "variable",
          regex: /\.[a-z,]{2,5}\./
        },
        {
          token: keywordMapper,
          regex: "\\b\\w+\\b"
        }
      ],
      qcomment: [
        {
          token: "comment",
          regex: "$",
          next: "start"
        },
        {
          defaultToken: "comment"
        }
      ],
      qstring: [
        {
          token: "string",
          regex: "\\\\$",
          consumeLineEnd: true
        },
        {
          token: "string",
          regex: '"|$',
          next: "start"
        },
        {
          defaultToken: "string"
        }
      ],
      qnstring: [
        {
          token: "string",
          regex: "\\\\$",
          consumeLineEnd: true
        },
        {
          token: "string",
          regex: "[^a-zA-Z0-9]",
          next: "start"
        },
        {
          defaultToken: "string"
        }
      ]
    };
  }
}

export default class PolyglotMode extends window.ace.acequire("ace/mode/text")
  .Mode {
  constructor() {
    super();
    this.HighlightRules = PolyglotHighlightRules;
  }
}
