import view from './view';
import * as model from './model';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controlClick = function (btn) {
  const values = view.getValues(btn);

  model.updateState(values);

  const results = model.calculate();
  view.renderResults(results);
};

const controlChange = function (btnCustom) {
  const values = view.getValues(btnCustom);
  model.updateState(values);

  const results = model.calculate();
  view.renderResults(results);
};

const controlReset = function () {
  const resetValues = model.resetState();
  console.log(resetValues);
  view.renderResults(resetValues, true);
};

const init = function () {
  view.addHandlerClick(controlClick);
  view.addHandlerChange(controlChange);
  view.addHandlerReset(controlReset);
};

init();
