import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-paket-докум-постав-l');
  this.route('i-i-s-paket-докум-постав-e',
  { path: 'i-i-s-paket-докум-постав-e/:id' });
  this.route('i-i-s-paket-докум-постав-e.new',
  { path: 'i-i-s-paket-докум-постав-e/new' });
  this.route('i-i-s-paket-клиенты-l');
  this.route('i-i-s-paket-клиенты-e',
  { path: 'i-i-s-paket-клиенты-e/:id' });
  this.route('i-i-s-paket-клиенты-e.new',
  { path: 'i-i-s-paket-клиенты-e/new' });
  this.route('i-i-s-paket-организация-l');
  this.route('i-i-s-paket-организация-e',
  { path: 'i-i-s-paket-организация-e/:id' });
  this.route('i-i-s-paket-организация-e.new',
  { path: 'i-i-s-paket-организация-e/new' });
  this.route('i-i-s-paket-пункт-погрузки-l');
  this.route('i-i-s-paket-пункт-погрузки-e',
  { path: 'i-i-s-paket-пункт-погрузки-e/:id' });
  this.route('i-i-s-paket-пункт-погрузки-e.new',
  { path: 'i-i-s-paket-пункт-погрузки-e/new' });
  this.route('i-i-s-paket-список-барж-l');
  this.route('i-i-s-paket-список-барж-e',
  { path: 'i-i-s-paket-список-барж-e/:id' });
  this.route('i-i-s-paket-список-барж-e.new',
  { path: 'i-i-s-paket-список-барж-e/new' });
  this.route('i-i-s-paket-список-контей-l');
  this.route('i-i-s-paket-список-контей-e',
  { path: 'i-i-s-paket-список-контей-e/:id' });
  this.route('i-i-s-paket-список-контей-e.new',
  { path: 'i-i-s-paket-список-контей-e/new' });
  this.route('i-i-s-paket-товары-l');
  this.route('i-i-s-paket-товары-e',
  { path: 'i-i-s-paket-товары-e/:id' });
  this.route('i-i-s-paket-товары-e.new',
  { path: 'i-i-s-paket-товары-e/new' });
  this.route('i-i-s-paket-формир-распред-l');
  this.route('i-i-s-paket-формир-распред-e',
  { path: 'i-i-s-paket-формир-распред-e/:id' });
  this.route('i-i-s-paket-формир-распред-e.new',
  { path: 'i-i-s-paket-формир-распред-e/new' });
  this.route('i-i-s-paket-формир-рез-пос-l');
  this.route('i-i-s-paket-формир-рез-пос-e',
  { path: 'i-i-s-paket-формир-рез-пос-e/:id' });
  this.route('i-i-s-paket-формир-рез-пос-e.new',
  { path: 'i-i-s-paket-формир-рез-пос-e/new' });
});

export default Router;
