import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPaketДокумПоставLForm from './forms/i-i-s-paket-докум-постав-l';
import IISPaketКлиентыLForm from './forms/i-i-s-paket-клиенты-l';
import IISPaketОрганизацияLForm from './forms/i-i-s-paket-организация-l';
import IISPaketПунктПогрузкиLForm from './forms/i-i-s-paket-пункт-погрузки-l';
import IISPaketСписокБаржLForm from './forms/i-i-s-paket-список-барж-l';
import IISPaketСписокКонтейLForm from './forms/i-i-s-paket-список-контей-l';
import IISPaketТоварыLForm from './forms/i-i-s-paket-товары-l';
import IISPaketФормирРаспредLForm from './forms/i-i-s-paket-формир-распред-l';
import IISPaketФормирРезПосLForm from './forms/i-i-s-paket-формир-рез-пос-l';
import IISPaketДокумПоставEForm from './forms/i-i-s-paket-докум-постав-e';
import IISPaketКлиентыEForm from './forms/i-i-s-paket-клиенты-e';
import IISPaketОрганизацияEForm from './forms/i-i-s-paket-организация-e';
import IISPaketПунктПогрузкиEForm from './forms/i-i-s-paket-пункт-погрузки-e';
import IISPaketСписокБаржEForm from './forms/i-i-s-paket-список-барж-e';
import IISPaketСписокКонтейEForm from './forms/i-i-s-paket-список-контей-e';
import IISPaketТоварыEForm from './forms/i-i-s-paket-товары-e';
import IISPaketФормирРаспредEForm from './forms/i-i-s-paket-формир-распред-e';
import IISPaketФормирРезПосEForm from './forms/i-i-s-paket-формир-рез-пос-e';
import IISPaketДокумПоставModel from './models/i-i-s-paket-докум-постав';
import IISPaketКлиентыModel from './models/i-i-s-paket-клиенты';
import IISPaketОрганизацияModel from './models/i-i-s-paket-организация';
import IISPaketПунктПогрузкиModel from './models/i-i-s-paket-пункт-погрузки';
import IISPaketСписокБаржModel from './models/i-i-s-paket-список-барж';
import IISPaketСписокКонтейModel from './models/i-i-s-paket-список-контей';
import IISPaketТЧИнфОЗакModel from './models/i-i-s-paket-т-ч-инф-о-зак';
import IISPaketТоварыModel from './models/i-i-s-paket-товары';
import IISPaketФормирРаспредModel from './models/i-i-s-paket-формир-распред';
import IISPaketФормирРезПосModel from './models/i-i-s-paket-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-paket-докум-постав': IISPaketДокумПоставModel,
    'i-i-s-paket-клиенты': IISPaketКлиентыModel,
    'i-i-s-paket-организация': IISPaketОрганизацияModel,
    'i-i-s-paket-пункт-погрузки': IISPaketПунктПогрузкиModel,
    'i-i-s-paket-список-барж': IISPaketСписокБаржModel,
    'i-i-s-paket-список-контей': IISPaketСписокКонтейModel,
    'i-i-s-paket-т-ч-инф-о-зак': IISPaketТЧИнфОЗакModel,
    'i-i-s-paket-товары': IISPaketТоварыModel,
    'i-i-s-paket-формир-распред': IISPaketФормирРаспредModel,
    'i-i-s-paket-формир-рез-пос': IISPaketФормирРезПосModel
  },

  'application-name': 'Paket',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Paket',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Paket',
          title: 'Paket'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        paket: {
          caption: 'Paket',
          title: 'Paket',
          'i-i-s-paket-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-paket-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-paket-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-paket-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-paket-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-paket-формир-рез-пос-l': {
            caption: 'Формир рез пос',
            title: ''
          },
          'i-i-s-paket-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-paket-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-paket-товары-l': {
            caption: 'Товары',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-paket-докум-постав-l': IISPaketДокумПоставLForm,
    'i-i-s-paket-клиенты-l': IISPaketКлиентыLForm,
    'i-i-s-paket-организация-l': IISPaketОрганизацияLForm,
    'i-i-s-paket-пункт-погрузки-l': IISPaketПунктПогрузкиLForm,
    'i-i-s-paket-список-барж-l': IISPaketСписокБаржLForm,
    'i-i-s-paket-список-контей-l': IISPaketСписокКонтейLForm,
    'i-i-s-paket-товары-l': IISPaketТоварыLForm,
    'i-i-s-paket-формир-распред-l': IISPaketФормирРаспредLForm,
    'i-i-s-paket-формир-рез-пос-l': IISPaketФормирРезПосLForm,
    'i-i-s-paket-докум-постав-e': IISPaketДокумПоставEForm,
    'i-i-s-paket-клиенты-e': IISPaketКлиентыEForm,
    'i-i-s-paket-организация-e': IISPaketОрганизацияEForm,
    'i-i-s-paket-пункт-погрузки-e': IISPaketПунктПогрузкиEForm,
    'i-i-s-paket-список-барж-e': IISPaketСписокБаржEForm,
    'i-i-s-paket-список-контей-e': IISPaketСписокКонтейEForm,
    'i-i-s-paket-товары-e': IISPaketТоварыEForm,
    'i-i-s-paket-формир-распред-e': IISPaketФормирРаспредEForm,
    'i-i-s-paket-формир-рез-пос-e': IISPaketФормирРезПосEForm
  },

});

export default translations;
