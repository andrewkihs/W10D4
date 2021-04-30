import {
  RECEIVE_STEP,
  RECEIVE_STEPS,
  REMOVE_STEP,
} from "../actions/steps_actions";

const initialState = {
  1: {
    // this is the step with id = 1
    id: 1,
    title: "walk to store",
    done: false,
    todo_id: 1,
  },
  2: {
    // this is the step with id = 2
    id: 2,
    title: "buy soap",
    done: false,
    todo_id: 1,
  },
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let stepsObj = {}
  
  switch (action.type) {
    case RECEIVE_STEP:
      let idx = Object.keys(nextState).length;
      nextState[idx + 1] = action.step;
      return nextState;
    case RECEIVE_STEPS:
      action.steps.forEach((step, idx) => {
        stepsObj[idx + 1] = step;
      });
      nextState = stepsObj;
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
}

export default stepsReducer;