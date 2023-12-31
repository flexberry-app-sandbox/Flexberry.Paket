import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДог: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-paket-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-paket-организация', { inverse: null, async: false }),
  тЧИнфОЗак: DS.hasMany('i-i-s-paket-т-ч-инф-о-зак', { inverse: 'докумПостав', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-paket-докум-постав.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДог: {
    descriptionKey: 'models.i-i-s-paket-докум-постав.validations.номерДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-paket-докум-постав.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-paket-докум-постав.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОЗак: {
    descriptionKey: 'models.i-i-s-paket-докум-постав.validations.тЧИнфОЗак.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставE', 'i-i-s-paket-докум-постав', {
    номерДог: attr('Номер дог', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    организация: belongsTo('i-i-s-paket-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, hidden: true }),
    клиенты: belongsTo('i-i-s-paket-клиенты', 'Клиенты', {
      наимЗаказ: attr('наим', { index: 5 }),
      адресПостав: attr('Адрес постав', { index: 6, hidden: true })
    }, { index: 4, hidden: true }),
    тЧИнфОЗак: hasMany('i-i-s-paket-т-ч-инф-о-зак', 'Т ч инф о зак', {
      товары: belongsTo('i-i-s-paket-товары', 'Товары', {
        наимТовара: attr('Наим товара', { index: 1, hidden: true }),
        едИзм: attr('', { index: 3 }),
        цена: attr('', { index: 4 }),
        масса: attr('', { index: 5 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставL', 'i-i-s-paket-докум-постав', {
    номерДог: attr('Номер дог', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    организация: belongsTo('i-i-s-paket-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-paket-клиенты', 'наим', {
      наимЗаказ: attr('наим', { index: 3 }),
      телефон: attr('телеф', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
