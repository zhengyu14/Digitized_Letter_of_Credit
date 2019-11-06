import Vue from 'vue'
import Vuex from 'vuex'
import { stLeft } from '@/store/modules/layout/components/stLeft'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
  	    stLeft
    }
})

export default store
