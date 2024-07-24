<template>
	<div>
		<p>
			{{ question }}
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<el-tabs type="border-card">
			<el-tab-pane>
				<span slot="label">
					FinalVersion (Manual)
					<el-tooltip content="Synchronize to Polyglot" placement="top">
						<el-button type="text" @click="syncPolyglot"
							><i class="el-icon-refresh"></i
						></el-button>
					</el-tooltip>
					<el-tooltip content="Override from Polyglot" placement="top">
						<el-button type="text" @click="openWarning"
							><i class="el-icon-document-copy"></i
						></el-button>
					</el-tooltip>
				</span>
				<InputPolyglotEditor
					:value="value.manualVersion"
					:placeholder="placeholder"
					:version="manualVersion"
					:readOnly="false"
					@editor="getEditorValue(manualVersion, $event)"
				/>
			</el-tab-pane>
			<el-tab-pane>
				<span slot="label">
					PolyglotVersion (ReadOnly)
					<el-tooltip content="Refresh Polyglot Version" placement="top">
						<el-button type="text" @click="refreshPolyglot"
							><i class="el-icon-refresh-left"></i
						></el-button>
					</el-tooltip>
				</span>
				<InputPolyglotEditor
					:value="value.polyglotVersion"
					:placeholder="placeholder"
					:version="polyglotVersion"
					:readOnly="true"
					@editor="getEditorValue(polyglotVersion, $event)"
				/>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import InputPolyglotEditor from "./InputPolyglotEditor.vue";

export default {
	name: "InputTabsMulti",
	component: {
		InputPolyglotEditor
	},
	props: {
		question: String,
		placeholder: String,
		value: Object
	},
	data() {
		return {
			manualVersion: "manualVersion",
			polyglotVersion: "polyglotVersion"
		};
	},
	methods: {
		getEditorValue(version, data) {
			if (version == "manualVersion") {
				this.value.manualVersion = data;
				//this.$set(this.value,"manualVersion",data);
			}
			
		},
		//Override Manual version from Polyglot
		openWarning() {
			this.$confirm(
				"Are you sure to override with Polyglot content?",
				"Warning",
				{
					confirmButtonText: "OK",
					cancelButtonText: "Cancel",
					type: "warning"
				}
			).then(() => {
				//TODO get this.$tera.state.polyglot content to here
				if(this.value.polyglotVersion!=""){
					this.value.manualVersion=this.value.polyglotVersion;
					this.$message({
					type: "success",
					message: "Override successfully!"
				});
				}else{
					 this.$message({
						type:"warning",
						message:"Empty polyglot version, please check in Polyglot!"
					 });
				}
				
			});
		},
		syncPolyglot() {
			this.$confirm(
				"Are you sure to Synchronize this content to Polyglot?",
				"Warning",
				{
					confirmButtonText: "Synchronize",
					cancelButtonText: "Cancel",
					type: "warning"
				}
			).then(() => {
				//TODO save this content to $tera.state.polyglot
				if(this.value.manualVersion!=""){
					if(this.$tera.state.polyglot!=undefined){
						this.$set(this.$tera.state.polyglot.searchString, "Query", this.value.manualVersion)
						console.log("polyglot", this.$tera.state.polyglot);
					}else{
						this.$message({
							type:"warning",
							message:"Please check Polyglot project!"
						})
					}
				}else{
					this.$message({
						type:"warning",
						message:"Current content is empty!"
					})
				}
				
			});
		},
		refreshPolyglot(){
			this.$tera.state.polyglot.engines.forEach(el=>{
				if(el.label==this.value.label){
					this.value.polyglotVersion=el.polyglotVersion;
				}
			})
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-icon-document-copy {
	color: rgb(188, 159, 192);
}

.el-icon-refresh {
	color: darkseagreen;
}

.el-icon-refresh-left {
	color: #5F9EA0;
}
</style>
