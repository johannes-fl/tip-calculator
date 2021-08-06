export const state = {
  bill: '',
  percentage: '',
  people: '',
  tipAmount: '0.00',
  totalAmount: '0.00'
};

export const updateState = function (data) {
  state.bill = data.billValue;
  state.percentage = data.percentage;
  state.people = data.peopleValue;
};

export const resetState = function () {
  state.bill = '';
  state.percentage = '';
  state.people = '';
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
