import {actions} from './actions'
import {mutations} from './mutations'
import {state} from './state'
import {getters} from './getters'

export default {
    actions:actions,
    state:state,
    getters:getters,
    mutations:mutations,
    namespaced:true
}