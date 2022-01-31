const redux =  require("redux")

function reducer(prev, action){
    if (!prev) {
        return(
            {
                counter: 1
            }
        )
    }
    return(
        {
            counter: prev.counter + 1
        }
    )
}

const store = redux.createStore(reducer)

function subscriber(){
    const state = store.getState()
    console.log(state);
}

store.subscribe(subscriber)

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})