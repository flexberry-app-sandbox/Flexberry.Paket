export default {
  projections: {
    ФормирРаспредE: {
      номерДокРаспр: {
        __caption__: 'Номер док распр'
      },
      дата: {
        __caption__: 'Дата'
      }
    },
    ФормирРаспредL: {
      номерДокРаспр: {
        __caption__: 'Номер док распр'
      },
      дата: {
        __caption__: 'Дата'
      },
      докумПостав: {
        __caption__: 'Номер дог',
        номерДог: {
          __caption__: 'Номер дог'
        },
        клиенты: {
          __caption__: '',
          наимЗаказ: {
            __caption__: ''
          },
          адресПостав: {
            __caption__: ''
          }
        }
      },
      пунктПогрузки: {
        __caption__: 'Наименование',
        наименование: {
          __caption__: 'Наименование'
        }
      },
      списокКонтей: {
        __caption__: 'Наим конт',
        наимКонт: {
          __caption__: 'Наим конт'
        }
      },
      списокБарж: {
        __caption__: 'Производитель',
        производитель: {
          __caption__: 'Производитель'
        }
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата'
    },
    номерДокРаспр: {
      __caption__: 'Номер док распр'
    },
    докумПостав: {
      __caption__: 'Номер дог'
    },
    пунктПогрузки: {
      __caption__: 'Наименование'
    },
    списокБарж: {
      __caption__: 'Производитель'
    },
    списокКонтей: {
      __caption__: 'Наим конт'
    }
  }
};
