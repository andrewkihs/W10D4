class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.subscriptions = [];
    this.state = this.rootReducer({}, "", this.subscriptions);
  }

  getState() {
    return Object.assign({}, this.state);
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action, this.subscriptions);
  }

  subscribe(callback){
    this.subscriptions.push(callback);
  }
}

const newStore = (...args) => new Store(...args);


const combineReducers = (reducersObj) => {
  return (prevState, action, subscriptions) => {
    let nextState = {};
    let stateChanged = false;
    Object.keys(reducersObj).forEach( (key) => {
      let next = reducersObj[key](prevState[key], action);
      if (next != prevState[key]) {
        stateChanged = true;
      }
      nextState[key] = next;
    });
    if (stateChanged) {
      subscriptions.forEach( (callback) => {
        callback(nextState);
      })
    }
    return nextState;
  }
}

const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch(action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
  }
};

