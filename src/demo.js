const state = {
  a: 3,
};

const newState = Object.assign({}, state);
newState.a = 5;

console.log(state !== newState);

const object1 = {};
const object2 = {};

console.log(object1 === object2);
