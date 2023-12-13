import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-paket-список-контей', 'Unit | Model | i-i-s-paket-список-контей', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-paket-докум-постав',
    'model:i-i-s-paket-клиенты',
    'model:i-i-s-paket-организация',
    'model:i-i-s-paket-пункт-погрузки',
    'model:i-i-s-paket-список-барж',
    'model:i-i-s-paket-список-контей',
    'model:i-i-s-paket-т-ч-инф-о-зак',
    'model:i-i-s-paket-товары',
    'model:i-i-s-paket-формир-распред',
    'model:i-i-s-paket-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
