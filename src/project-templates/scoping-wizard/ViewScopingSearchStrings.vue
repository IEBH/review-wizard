<template>
	<div>
		<h1>Search Strings</h1>

		<InputSelectMulti
			question="Which databases did you search for your scoping review?"
			:options="engineOptions"
			v-model="$tera.state.databases"
		/>

		<InputDate
			question="What date did you run your search on?"
			v-model="$tera.state.dateOfSearch"
		/>

		<InputDate
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			v-model="$tera.state.dateSearchedUntil"
		/>
		
		<div
			v-for="(database, index) of $tera.state.databases"
			:key="database.label"
		> 
			<InputTabsMulti
				:question="`(${database.label}) Database ${index + 1}`"
				:value="database"
				:placeholder="placeholder2"
			/>
		</div>
		
		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
//Search Strings for Bibliographic Databases
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputDate from "@/components/InputDate";
import InputTabsMulti from "@/components/InputTabsMulti";
//Search Strings for Trial Registries

import OutputSearchStrings from "./OutputSearchStrings.vue";

export default {
	name: "ViewScopingSearchStrings",

	components: {
		InputSelectMulti,
		InputTabsMulti,
		PreviewOutput,
		InputDate
	},
	
	data() {
		return {
			//outputVersions:{},
			//Search Strings for Trial Registries
			registryOptions: [
				// eslint-disable-next-line prettier/prettier
				{
					label:
						"World Health Organization – International Clinical Trials Registry Platform (ICTRP)",
					string: ""
				},
				{ label: "ClinicalTrials.gov", string: "" },
				{ label: "Health Canada Clinical Trial Database", string: "" },
				{ label: "EU Clinical Trials Register", string: "" },
				{ label: "German Clinical Trials Register", string: "" },
				{ label: "Netherlands Trial Register (Dutch)", string: "" },
				{ label: "Swiss National Clinical Trials Portal", string: "" },
				{ label: "ISRCTN", string: "" },
				// eslint-disable-next-line prettier/prettier
				{
					label: "Australian New Zealand Clinical Trials Registry",
					string: ""
				},
				{ label: "Chinese Clinical Trial Registry", string: "" },
				{ label: "Clinical Trials Registry - India", string: "" },
				{ label: "Cochrane CENTRAL", string: "" }
			],
			defalutEngines:[
				{
				key: "PubMed abbreviation",
				label: "PubMed",
                manualVersion: "", //manual SearchString version
				polyglotVersion: ""
			},
			{
				key: "Ovid MEDLINE",
				label: "Ovid MEDLINE",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Cochrane Library",
				label: "Cochrane Library",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Embase (Elsevier)",
				label: "Embase (Elsevier)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Ovid MEDLINE",
				label: "Embase (Ovid)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "CINAHL (Ebsco)",
				label: "CINAHL (Ebsco)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Web of Science",
				label: "Web of Science",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "WoS Advanced",
				label: "WoS Advanced",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Scopus (basic search)",
				label: "Scopus (basic search)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Scopus (advanced search)",
				label: "Scopus (advanced search)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "PsycInfo (Ovid)",
				label: "PsycInfo (Ovid)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "PsycInfo (Ebsco)",
				label: "PsycInfo (Ebsco)",
                manualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Google",
				label: "Google",
                manualVersion: "",
				polyglotVersion: ""
			}
			],
			outputComponent: OutputSearchStrings,
			//outputComponentAppendix: OutputSearchStringsAppendix,
			placeholder1: "e.g. Acne AND Phototherapy OR Acne AND Light",
			placeholder2: `e.g.("Acne Vulgaris"[Mesh] OR Acne[tiab] OR Blackheads[tiab] OR Whiteheads[tiab] OR Pimples[tiab]) AND ("Phototherapy"[Mesh] OR "Blue light"[tiab] OR Phototherapy[tiab] OR Phototherapies[tiab] OR "Photoradiation therapy"[tiab] OR "Photoradiation Therapies"[tiab] OR "Light Therapy"[tiab] OR "Light Therapies"[tiab]) AND (Randomized controlled trial[pt] OR controlled clinical trial[pt] OR randomized[tiab] OR randomised[tiab] OR placebo[tiab] OR "drug therapy"[sh] OR randomly[tiab] OR trial[tiab] OR groups[tiab]) NOT (Animals[Mesh] not (Animals[Mesh] and Humans[Mesh]))`
		};
	},
	computed:{
		engineOptions(){
			//never visit polyglot project before, load the default
			if(this.$tera.state.polyglot==undefined){
				this.genOutputVersions(this.defalutEngines);
				return this.defalutEngines;
			}else{
				this.genOutputVersions(this.$tera.state.polyglot.engines);
				return this.$tera.state.polyglot.engines;
			}	
		}
	},
	methods:{
		genOutputVersions(engines){
			if(this.$tera.state.outputVersions!={}){
				engines.forEach(el => {
					if(!this.checkUnion(el,Object.keys(this.$tera.state.outputVersions))){
						//add a new key's output version => manualVersion
					    this.$set(this.$tera.state.outputVersions,el.label,"manualVersion");
				    }
			    });
			}else{
				engines.forEach(el => {
					//add a default output version => manualVersion
					this.$set(this.$tera.state.outputVersions,el.label,"manualVersion");
			    });
			}
		},
		checkUnion(engine,outputEngines){
			outputEngines.forEach(el=>{
				if(engine.label==el){
					//console.log("engine:"+engine.label+", output:"+el);
					return true;
				}
			})
			return false;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
