import Vue from 'vue';
import Vuex from 'vuex';

import jobs from "./jobs.js";
import filter from "./filter.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		jobs, filter
	}
});
