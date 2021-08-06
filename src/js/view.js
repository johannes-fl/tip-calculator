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
    this._buttons.querySelectorAll('.btn').forEach(btn => {
      btn.classList.remove('btn--active');
    });

    btn.classList.add('btn--active');
  }

  addHandlerClick(handler) {
    this._buttons.addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      if (btn.classList.contains('btn--custom')) return;

      this._markActive(btn);

      handler(btn);
    });
  }

  addHandlerChange(handler) {
    this._buttonCustom.addEventListener('change', e => {
      const btn = e.target.closest('.btn');
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
}

export default new View();
