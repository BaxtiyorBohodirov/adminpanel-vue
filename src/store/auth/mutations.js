export const mutations = {
    setIsAuth(state,data)
    {
        state.is_auth=data
    },
    setModels(state,models)
    {
        state.models=models
    },
    setNextRoute(state,route)
    {
        state.nextRoute=route
    },
    setInputErrors(state,errors)
    {
        state.inputErrors=errors
    }

}