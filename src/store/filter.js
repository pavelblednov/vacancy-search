export default {
	namespaced: true,

	state: {
		list: [
			{
				key: 'location',
				items: [
					{
						slug: 'new_york',
						value: 'New York'
					},
					{
						slug: 'remote',
						value: 'Remote'
					},
					{
						slug: 'los_angeles',
						value: 'Los Angeles'
					},
					{
						slug: 'chicago',
						value: 'Chicago'
					}
				]
			},
			{
				key: 'requirements',
				items: [
					{
						slug: 'communication',
						value: 'Communication'
					},
					{
						slug: 'microsoft_excel',
						value: 'Microsoft Excel'
					},
					{
						slug: 'microsoft_word',
						value: 'Microsoft Word'
					}
				]
			},
			{
				key: 'tasks',
				items: [
					{
						slug: 'answering_phone_calls',
						value: 'Answering phone calls'
					},
					{
						slug: 'providing_customer_service',
						value: 'Providing customer service'
					},
					{
						slug: 'creating_reports',
						value: 'Creating reports'
					}
				]
			},
			{
				key: 'experience',
				items: [
					{
						slug: 0,
						value: '0'
					},
					{
						slug: 1,
						value: '1 year'
					},
					{
						slug: 3,
						value: '3 years'
					},
					{
						slug: 5,
						value: '5+ years'
					}
				]
			}
		]
	},

	mutations: {
		
	},

	actions: {
		
	},

	getters: {
		GET_LIST: function (_state)
		{
			return _state.list;
		}
	}
};
