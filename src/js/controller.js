import view from './view';
import * as model from './model';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRender = function (btn) {
  const values = view.getValues(btn);
  model.updateState(values);
  const results = model.calculate();

  if (!results.people || !results.bill) return view.renderError(results);

  view.renderResults(results);
};

const controlClick = function (btn) {
  controlRender(btn);
};

const controlChange = function (btnCustom) {
  controlRender(btnCustom);
};

const controlReset = function () {
  const resetValues = model.resetState();
  view.renderResults(resetValues, true);
};

const controlInput = function (input) {
  view.removeError(input);
};

const init = function () {
  view.addHandlerButton(controlClick);
  view.addHandlerChange(controlChange);
  view.addHandlerReset(controlReset);
  view.addHandlerInput(controlInput);
};

init();
