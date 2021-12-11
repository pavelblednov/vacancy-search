<template>
	<div v-if="aFilters.length" class="filter">
		<div class="filter__row"
			v-for="oFilters in aFilters" :key="oFilters.key"
		>
			<div class="filter__title" v-text="oFilters.key"></div>
			<div class="filter__list">
				<div class="filter__item" 
					:class="{'selected': oCurrentFilters[oFilters.key].indexOf(oFilter.slug) > -1}"
					v-for="oFilter in oFilters.items" :key="oFilter.slug"
					v-text="oFilter.value"
					@click="onClickFilter(oFilter, oFilters.key)"
				></div>
			</div>
		</div>

		<div v-if="hasFilters" class="filter__action">
			<button class="filter__clear"
				type="button"
				v-text="'Clear'"
				@click="onClickClear"
			></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'search-filter',

	props: {
		aFilters: {
			type: Array,
			default: function ()
			{
				return [];
			}
		}
	},

	data: function ()
	{
		var	aFilters = this.aFilters,
			oCurrentFilters = {},
			oFilter, i, L;

		for (i = 0, L = aFilters.length; i < L; i++)
		{
			oFilter = aFilters[i];

			oCurrentFilters[oFilter.key] = [];
		}

		return {
			oCurrentFilters: oCurrentFilters
		};
	},

	computed: {
		hasFilters: function ()
		{
			var oCurrentFilters = this.oCurrentFilters,
				aFilterKeys = Object.keys(oCurrentFilters);

			return aFilterKeys.some(function (_sKey)
			{
				return oCurrentFilters[_sKey].length;
			});
		}
	},

	methods: {
		onClickFilter: function (_oFilter, _sType)
		{
			var aFilters = this.oCurrentFilters[_sType],
				sSlug = _oFilter.slug,
				iCurrentIndex = aFilters.indexOf(sSlug);

			if (iCurrentIndex === -1)
			{
				aFilters.push(sSlug);
			}
			else
			{
				aFilters.splice(iCurrentIndex, 1);
			}
		},
		onClickClear: function ()
		{
			for (var sKey in this.oCurrentFilters)
			{
				this.oCurrentFilters[sKey] = [];
			}
		}
	}
}
</script>

<style lang="scss">
.filter
{
	&__row
	{
		margin-top: 20px;

		&:first-child
		{
			margin-top: 0;
		}
	}

	&__title
	{
		margin-bottom: 10px;
		font-size: 20px;
		font-weight: 700;
		text-transform: capitalize;
	}

	&__list
	{
		display: flex;
		flex-direction: row;
		margin: 0 -5px;
	}

	&__item
	{
		min-width: 65px;
		margin: 0 5px;
		padding: 0 15px;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
		cursor: pointer;
		border: 1px solid #e1e1e1;
		border-radius: 30px;
		transition: color 300ms ease-out,
					background-color 300ms ease-out,
					border-color 300ms ease-out;

		&.selected
		{
			order: -1;
			color: #cd642f;
			background-color: #f9e3d6;
			border-color: #f9e3d6;
		}
	}

	&__action
	{
		text-align: right;
	}

	&__clear
	{
		display: inline-block;
		padding: 10px 15px;
		cursor: pointer;
		background: #EEE;
		border: none;
		border-radius: 30px;
	}
}
</style>
