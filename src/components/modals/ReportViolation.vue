<template>
	<b-modal
        id="modalReportViolation"
        v-bind:header-class="'border-bottom-0'"
        v-bind:footer-class="'border-top-0'"
        v-bind:header-bg-variant="'light'"
        v-bind:content-class="'border-0'"
        v-on:ok="handleOk"
        v-on:cancel="handleCancel"
        centered
        no-stacking
    >
		<template v-slot:modal-header="{ close }">
			<div class="h5 modal-title">Report a violation</div>
            <button class="btn close" v-on:click="close()" type="button"><font-awesome-icon icon="times" size="sm" /></button>
		</template>
		<template v-slot:default>
			<form ref="form" v-on:submit.prevent="submitRememberMe">
                <div class="alert alert-warning border-0">
                    <div class="h6 font-weight-bold">
                        <font-awesome-icon icon="exclamation-triangle" size="lg" class="mr-3"/> {{ reportHeader }}
                    </div>
                    <hr class="my-2">
                    <div v-for="(item, key) in reportInfo" :key="key">
                        <b class="text-capitalize">{{ key }}:</b> {{ item }}
                    </div>
                </div>

				<label for="inputViolation" class="sr-only">Violation text</label>
				<textarea 
                    id="inputViolation"
                    class="form-control"
                    placeholder="Type here to a violation"
                    v-model="report"
                ></textarea>
			</form>
		</template>	
        <template v-slot:modal-footer="{cancel, ok}">
            <button class="btn btn-link text-decoration-none" v-on:click="cancel()" type="button"><font-awesome-icon icon="times" class="mr-2" />Close</button>
            <button class="btn btn-primary" v-on:click="ok()" type="submit" v-bind:disabled="!report"><font-awesome-icon icon="paper-plane" class="mr-2" />Send report</button>
        </template>
	</b-modal>
</template>

<script>
	export default {
		name: 'modalReportViolation',
        data(){
            return{
                report: ''
            }
        },
        props: {
            reportHeader: String,
            reportInfo: Object,
            reportSnitch: Object
        },
        methods: {
            handleOk(){
                console.log(this.reportHeader, this.reportSnitch, this.reportInfo, this.report)
            },
            handleCancel(){
                this.report = ''
            }
        },
	}
</script>
