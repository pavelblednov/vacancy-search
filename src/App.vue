<template>
	<div id="app">
		<div class="search">
			<input
				class="search__field"
				type="text"
				placeholder="Search by location"
				@input="onInput"
				@focus="onFocus"
			/>

			<div v-if="bShowDD" class="search__dropdown">
				<div class="search__dropdown__inner">
					<button
						@click="onCloseDD"
						class="search__dropdown__close"
						type="button"
						v-text="'x'"
					></button>

					<search-filter v-if="!sSearchQuery" :aFilters="aFilters" />

					<job-list v-else :aJobs="aJobs" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SearchFilter from './components/SearchFilter.vue';

export default {
	name: 'App',

	components: {
		'job-list': () => import('./components/Jobs.vue'),
		'search-filter': SearchFilter
	},

	data: function ()
	{
		return {
			sSearchQuery: '',
			bShowDD: false
		};
	},

	computed: {
		aJobs: function ()
		{
			return this.$store.getters['jobs/GET_LIST'].filter(_oJob => _oJob.value.toLowerCase().includes(this.sSearchQuery.toLowerCase()));
		},
		aFilters: function ()
		{
			return this.$store.getters['filter/GET_LIST'];
		}
	},

	methods: {
		onFocus: function ()
		{
			this.onOpenDD();
		},
		onInput: function (e)
		{
			if (this.__iTimeoutInput)
			{
				clearTimeout(this.__iTimeoutInput);
			}

			this.__iTimeoutInput = setTimeout(on_input.bind(this), 200);

			function on_input ()
			{
				this.sSearchQuery = e.target.value.trim();
			}
		},

		onOpenDD: function ()
		{
			this.bShowDD = true;
		},
		onCloseDD: function ()
		{
			this.bShowDD = false;
		}
	}
}
</script>

<style lang="scss">
*
{
	padding: 0;
	margin: 0;

	&,
	&::before,
	&::after {
		box-sizing: inherit;
	}
}

html
{
	box-sizing: border-box;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

.search
{
	position: relative;
	width: 100%;
	max-width: 600px;
	margin: 100px auto 0;

	&__field
	{
		display: block;
		float: none;
		width: 100%;
		background: #FFF;
		background-clip: padding-box;
		border: 1px solid #2f2f2f;
		line-height: 1.4;
		letter-spacing: 0;
		font-size: 1.4rem;
		font-weight: 400;
		color: #010F07;
		appearance: none;
		outline: none;
		padding: 15px 20px;
		box-shadow: none;
		border-radius: 12px; 
	}

	&__dropdown
	{
		position: absolute;
		top: 100%;
		left: 50%;
		width: 800px;
		margin-top: 30px;
		padding: 25px 20px;
		background-color: #FFF;
		transform: translateX(-50%);
		border-radius: 25px;
		box-shadow: 0 0 1px 1px #2f2f2f;

		&__close
		{
			position: absolute;
			top: 10px;
			right: 10px;
			width: 25px;
			height: 25px;
			text-align: center;
			cursor: pointer;
			color: #000;
			background: none transparent;
			border: 1px solid currentColor;
			border-radius: 50%;
		}
	}
}
</style>
