<template>
	<div>
		<!--ResearchPlan TestPage-->
		<GenericTable
			title="Research Plan"
			question="What is your Research Plan?"
			:columnDefs="columnDefs"
			:rowData="rowData"
			:gridOptions="gridOptions"
			:singleRow="singleRow"
			@api="getApi"
		/>
	</div>
</template>
<script>
import tableEditor from "@/components/tableComponents/tableEditor.vue";
import tableLink from "@/components/tableComponents/tableLink.vue";
import tableAutoComplete from "@/components/tableComponents/tableAutoComplete.vue";

export default {
	name: "test-ResearchPlan",
	components: {
		// eslint-disable-next-line vue/no-unused-components
		tableEditor,
		// eslint-disable-next-line vue/no-unused-components
		tableLink,
		// eslint-disable-next-line vue/no-unused-components
		tableAutoComplete
	},
	data() {
		return {
			gridApi: null,
			gridOptions: {
				rowHeight: 180,
				defaultColDef: {
					width: 300 //default width of each column
				}
			},
			singleRow: {
				progress: false,
				tasks: "",
				toolDescription: "",
				toolLink: [],
				notes: "",
				peopleInvolved: ""
			},
			columnDefs: [
				{
					headerName: "Completed",
					field: "progress",
					editable: true,
					width: 150
				},
				{
					field: "tasks",
					headerName: "Task",
					cellEditor: "agTextCellEditor",
					editable: true,
					width: 220
				},
				{
					field: "toolDescription",
					headerName: "Description",
					cellRenderer: "tableEditor"
				},
				{
					field: "toolLink",
					headerName: "Tool",
					cellRenderer: "tableLink",
					width: 220
				},
				{
					field: "peopleInvolved",
					headerName: "People",
					cellRenderer: "tableAutoComplete",
					cellRendererParams: {
						titlePageAuthors: this.$tera.state.author.map(el => {
							return { label: el };
						})
					}
				},
				{
					field: "notes",
					headerName: "Notes",
					cellRenderer: "tableEditor"
				}
			],
			rowData: this.$tera.state.planTable.rows
		};
	},
	mounted() {
		this.rowData.map(row => {
			//console.log("row:", row);
			if (
				row.tasks == "Design systematic search strategy" ||
				row.tasks == "Run systematic search strings" ||
				row.tasks == "Deduplicate results"
			) {
				if (this.$tera.state.searchStrategyAuthors != null) {
					row.peopleInvolved = this.$tera.state.searchStrategyAuthors;
				}
			}
			if (
				row.tasks == "Citation search" &&
				this.$tera.state.conductSSearchAuthors != null
			) {
				row.peopleInvolved = this.$tera.state.conductSSearchAuthors;
			}
			if (
				row.tasks == "Screen abstracts" &&
				this.$tera.state.titleAbstractScreeners != null
			) {
				row.peopleInvolved = this.$tera.state.titleAbstractScreeners;
			}
			if (
				row.tasks == "Obtain full text" &&
				this.$tera.state.fullTextRetrivalAuthor != null
			) {
				row.peopleInvolved = this.$tera.state.fullTextRetrivalAuthor;
			}
			if (
				row.tasks == "Screen full text" &&
				this.$tera.state.fullTextScreeners != null
			) {
				row.peopleInvolved = this.$tera.state.fullTextScreeners;
			}
			if (
				row.tasks == "Screen trial registries" &&
				this.$tera.state.screenTrialRegisPeople != null
			) {
				row.peopleInvolved = this.$tera.state.screenTrialRegisPeople;
			}
			if (
				row.tasks == "Screen citation analysis" &&
				this.$tera.state.screenCitationSearchPeople != null
			) {
				row.peopleInvolved = this.$tera.state.screenCitationSearchPeople;
			}
			if (
				row.tasks == "Extract data" &&
				this.$tera.state.extractionAuthors != null
			) {
				row.peopleInvolved = this.$tera.state.extractionAuthors;
			}
			if (
				row.tasks == "Risk of Bias assessment" &&
				this.$tera.state.assessedRobAuthors != null
			) {
				row.peopleInvolved = this.$tera.state.assessedRobAuthors;
			}
			return row;
		});
	},
	methods: {
		getApi(api) {
			this.gridApi = api;
		}
	}
};
</script>
