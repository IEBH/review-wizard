<template>
	<div>
		<Toolbar>
			<template #start>
				<strong>
					{{ $tera.state.name ? $tera.state.name : "Untitled Methods Section" }}
				</strong>
				<TheArticleCitation
					:title="$tera.state.name"
					:authors="$tera.state.authors"
					:year="$tera.state.year"
				/>
			</template>
		</Toolbar>
	</div>
</template>

<script>
import { mapState } from "vuex";

import Toolbar from "primevue/toolbar";

import TheArticleCitation from "./TheArticleCitation.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "TheArticleToolbar",
	mixins: [deepstreamMixin("titlepage")],
	components: {
		Toolbar,
		TheArticleCitation
	},
	computed: mapState({
		projectId: state => state.projectId,
		projectRecord: state => state.projectRecord
	}),
	data() {
		return {
			displayModal: false,
			displayWarn: false,
			shareUrl: ""
		};
	}
}
</script>

<style>
.p-toolbar {
	background-image: linear-gradient(#6880b5, #465b8b, #5971a5);
	/* background-image: linear-gradient(#7992c9, #5876b7, #547acd); */
	/* background-image: linear-gradient(#7e94c6, #5970a1, #6b8cd5); */
	color: #dcdee5;
}

.btsyleblue {
	margin: 10px;
	/* width: 100px; */
	background-color: #83bfed;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #05305f;
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		/* background-color: #0069d9 !important; */
		background-color: #437fbe !important;

		border: 2px solid #5679a2 !important;
	}
}

.btsylered {
	margin: 10px;
	/* width: 100px; */
	background-color: #f4a8a2;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #c03e34;
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		background-color: #ba4a41 !important;
		border: 2px solid #e49164 !important;
	}
}
</style>
