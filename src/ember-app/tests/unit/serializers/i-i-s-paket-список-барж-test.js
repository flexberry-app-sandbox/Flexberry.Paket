import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-paket-список-барж', 'Unit | Serializer | i-i-s-paket-список-барж', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-paket-список-барж',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-paket-ед-изм',
    'transform:i-i-s-paket-статус-заказа',
    'transform:i-i-s-paket-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
