export const state = {
  bill: 0,
  percentage: 0,
  people: 0,
  tipAmount: 0,
  totalAmount: 0
};

export const updateState = function (data) {
  state.bill = data.billValue;
  state.percentage = data.percentage;
  state.people = data.peopleValue;
};

export const resetState = function () {
  state.bill = 0;
  state.percentage = 0;
  state.people = 0;
  state.tipAmount = '0.00';
  state.totalAmount = '0.00';

  return state;
};

export const calculate = function () {
  (state.tipAmount = (
    (state.bill * (1 + state.percentage)) /
    state.people
  ).toFixed(2)),
    (state.totalAmount = (state.bill * (1 + state.percentage)).toFixed(2));

  return state;
};
