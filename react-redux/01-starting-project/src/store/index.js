const redux = require("redux")

function storeReducer(prev, action){
    if (!prev) {
        return({counter: 0})
    } else{
        return( {counter: prev.counter + 1})
    }
}

const store = redux.createStore(storeReducer)

export default redux
export {store}