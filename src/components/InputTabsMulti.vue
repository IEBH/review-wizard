<template>
	<div>
		<p>
			{{ question }}
			<el-switch
				v-model="switchValue"
				active-text="PolyglotVersion"
				inactive-text="FinalVersion"
				active-color="#5F9EA0"
				inactive-color="#BDB76B"
				@change="handleSwich($event)"
			>
			</el-switch>
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
					:value="value.muanualVersion"
					:placeholder="placeholder"
					:version="muanualVersion"
					:readOnly="false"
					@editor="getEditorValue(muanualVersion, $event)"
				/>
			</el-tab-pane>
			<el-tab-pane label="PolyglotVersion (ReadOnly)">
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
		value: Object,
	},
	data() {
		return {
			muanualVersion: "muanualVersion",
			polyglotVersion: "polyglotVersion",
			switchValue: true
		};
	},
	/*computed: {
		switchValue: function() {
			if (this.value.method == "muanualVersion") {
				return false;
			} else {
				return true;
			}
		}
	}，*/
	methods: {
		getEditorValue(version, data) {
			if (version == "muanualVersion") {
				this.value.muanualVersion = data;
				//this.$set(this.value,"muanualVersion",data);
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
					this.value.muanualVersion=this.value.polyglotVersion;
					//this.$emit("input", this.value);
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
		/*handleSwich(event) {
			if (event == false) {
				this.value.method = this.muanualVersion;
			} else {
				this.value.method = this.polyglotVersion;
			}
			this.$emit("input", this.value);
			//console.log("switch:" + JSON.stringify(this.value));
		},*/
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
			});
			/*.then(
				() => {
				let content = {
					database: this.value.label,
					syncContent: this.value.muanualVersion
				};
				window.postMessage(
					JSON.stringify(content),
					"https://polyglot.tera-tools.com"
				);
			});*/
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
.el-switch {
	margin-left: 80%;
}
</style>
