import {actions} from './actions'
import {state} from './state'
import {getters} from './getters'
import {mutations} from './mutations'
export default {
    state:state,
    actions:actions,
    mutations:mutations,
    getters:getters,
    namespaced:true
}