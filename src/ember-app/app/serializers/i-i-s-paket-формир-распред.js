import { Serializer as ФормирРаспредSerializer } from
  '../mixins/regenerated/serializers/i-i-s-paket-формир-распред';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормирРаспредSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
