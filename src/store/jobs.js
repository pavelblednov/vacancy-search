export default {
	namespaced: true,

	state: {
		list: [
			{
				slug: 'testing_software',
				value: 'Testing Software',
				category: 'Task'
			},
			{
				slug: 'test_engineer',
				value: 'Test engineer',
				category: 'Position'
			},
			{
				slug: 'testing_code',
				value: 'Testing code',
				category: 'Task'
			},
			{
				slug: 'testing_email_campaigns',
				value: 'Testing email campaigns',
				category: 'Task'
			},
			{
				slug: 'testing_new_products',
				value: 'Testing new products',
				category: 'Task'
			},

			{
				slug: 'frontend_dev',
				value: 'Front-end Dev',
				category: 'Task'
			},
			{
				slug: 'angular_dev',
				value: 'Angular Dev',
				category: 'Position'
			},
			{
				slug: 'react_dev',
				value: 'React Dev',
				category: 'Task'
			},
			{
				slug: 'UI/UX_designer',
				value: 'UI/UX Designer',
				category: 'Task'
			},
			{
				slug: 'testing_new_products_1',
				value: 'Front-end Developer',
				category: 'Task'
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
