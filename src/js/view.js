class View {
  constructor() {
    this._bill = document.querySelector('#bill');
    this._people = document.querySelector('#people');
    this._buttons = document.querySelector('.form__buttons');
    this._buttonCustom = document.querySelector('.btn--custom');
    this._tipAmount = document.querySelector('#tip-amount');
    this._total = document.querySelector('#total');
    this._buttonReset = document.querySelector('.btn--reset');
  }

  _markActive(btn) {
    btn.classList.add('btn--active');
  }

  _unmarkButtons() {
    this._buttons.querySelectorAll('.btn').forEach(btn => {
      btn.classList.remove('btn--active');
    });
  }

  removeError(el) {
    const errorMessage = el.parentElement.querySelector('.error-message');

    if (errorMessage) {
      errorMessage.remove();
      el.classList.remove('form__input--error');
    }
  }

  addHandlerInput(handler) {
    [this._bill, this._people].forEach(el =>
      el.addEventListener('focus', e => {
        handler(e.target);
      })
    );
  }

  addHandlerButton(handler) {
    this._buttons.addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      if (btn.classList.contains('btn--custom')) return;

      this._unmarkButtons();
      this._markActive(btn);

      handler(btn);
    });
  }

  addHandlerChange(handler) {
    this._buttonCustom.addEventListener('change', e => {
      const btn = e.target.closest('.btn');
      this._unmarkButtons();

      handler(btn);
    });
  }

  addHandlerReset(handler) {
    this._buttonReset.addEventListener('click', e => {
      handler();
    });
  }

  getValues(btn) {
    const percentage = btn.classList.contains('btn--custom')
      ? +(btn.value / 100)
      : Number.parseInt(btn.textContent) / 100;

    const values = {
      billValue: +this._bill.value.trim().replaceAll(',', '.'),
      percentage,
      peopleValue: +this._people.value
    };

    return values;
  }

  renderResults(res, reset = false) {
    this._tipAmount.textContent = res.tipAmount;
    this._total.textContent = res.totalAmount;

    if (!reset) return;

    this._bill.value = '';
    this._people.value = '';
    this._buttonCustom.value = '';
  }

  _renderErrorMarkup(el) {
    const errorMessage = el.parentElement.querySelector('.error-message');
    if (errorMessage) return;
    const markup = `<div class="error-message">Can't be zero</div>`;

    el.parentElement.insertAdjacentHTML('afterbegin', markup);
    el.classList.add('form__input--error');
  }

  renderError(res) {
    const { bill, people } = res;

    !bill ? this._renderErrorMarkup(this._bill) : '';
    !people ? this._renderErrorMarkup(this._people) : '';
  }
}

export default new View();
