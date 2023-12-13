import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.paket.caption'),
          title: i18n.t('forms.application.sitemap.paket.title'),
          children: [{
            link: 'i-i-s-paket-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-формир-распред-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-paket-список-барж-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-список-барж-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-paket-список-контей-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-список-контей-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-paket-организация-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-организация-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-paket-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-докум-постав-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-paket-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-формир-рез-пос-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-paket-клиенты-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-клиенты-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-paket-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-пункт-погрузки-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-paket-товары-l',
            caption: i18n.t('forms.application.sitemap.paket.i-i-s-paket-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.paket.i-i-s-paket-товары-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})