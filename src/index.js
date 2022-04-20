import store from "./store";
import  * as actions from "./actionTypes";

// state =reduced(state, action);
// notify the Subscribers


const unsubscribe=store.subscribe(() => {
    console.log("Store changed!",store.getState());
})
store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug 1" } });
unsubscribe();
store.dispatch({ type: actions.BUG_REMOVED, payload: { id: 1 } });
console.log(store.getState());
