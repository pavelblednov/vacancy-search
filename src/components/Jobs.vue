<template>
	<div v-if="aJobs.length" class="jobs">
		<div class="jobs__item"
			v-for="oJob in aJobs" :key="oJob.slug"
		>
			<h4 class="jobs__item__title" v-text="oJob.value"></h4>
			<span class="jobs__item__categoty" v-text="oJob.category"></span>
		</div>
	</div>
	<div v-else>No Search Result</div>
</template>

<script>
export default {
	name: 'jobs',

	props: {
		aJobs: {
			type: Array,
			default: function ()
			{
				return [];
			}
		}
	}
}
</script>

<style lang="scss">
.jobs
{
	margin: 30px 0 10px;
	max-height: 380px;
	overflow-y: auto;

	&__item
	{
		padding: 15px 0;
		border-top: 1px solid #e1e1e1;

		&:first-child
		{
			border-top: none;
		}

		&__title
		{
			margin-bottom: 10px;
		}

		&__categoty
		{
			font-size: 14px;
			color: #777;
		}
	}
}
</style>
