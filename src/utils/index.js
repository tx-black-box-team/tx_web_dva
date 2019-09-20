import moment from 'moment';

/**
 * 生成 set* 这类的reducer
 *
 * @param {Array[string]} list 需要set的值
 *
 * 使用位置：modal的reducers内
 *
 * 使用方式：
 * reducers: {
 *   ...genSetRedurcer([
 *     'stepIndex',
 *     'negativeIndex'
 *   ])
 * }
 *
 * 就会生成如下代码：
 * reducers: {
 *   setStepIndex (state, { stepIndex }) {
 *     return {
 *       ...state,
 *       stepIndex
 *     };
 *   },
 *   setNegativeIndex (state, { negativeIndex }) {
 *     return {
 *       ...state,
 *       negativeIndex
 *     };
 *   }
 * }
 */
export function genSetRedurcer(list) {
  // 判断类型
  for (const v of list) {
    if (typeof v !== 'string' || !v.length) {
      throw new TypeError('genSetRedurcer 的list参数必须是string数组');
    }
  }
  // 获取 set* 这类的函数名
  const setList = list.map(item => {
    return `set${item[0].toUpperCase()}${item.substring(1)}`;
  });
  // 生成函数对象
  const res = setList.reduce((acc, cur, idx) => {
    return {
      ...acc,
      [cur]: function(state, payload) {
        return {
          ...state,
          [list[idx]]: payload[list[idx]],
        };
      },
    };
  }, []);
  return res;
}

/**
 * 生成 action creator 的函数
 *
 * @param {String} baseName modal的命名空间
 *
 * 使用位置：mapDispatchToProps内
 *
 * 使用方式：
 * return {
 *   ...genEditorDispatch([
 *     'setIncludeSeed',
 *     'setTopPersons'
 *   ], dispatch)
 * };
 *
 * 就会生成如下代码：
 * return {
 *   setIncludeSeed: includeSeed =>
 *     dispatch({ type: 'editor/setIncludeSeed', includeSeed }),
 *   setTopPersons: topPersons =>
 *     dispatch({ type: 'editor/setTopPersons', topPersons })
 * };
 */
export function getSetDispatch(baseName) {
  return function(setList, dispatch) {
    // 判断类型
    for (const v of setList) {
      if (typeof v !== 'string' || v.length < 4) {
        throw new TypeError('getSetDispatch 的list参数必须是string数组');
      }
    }
    if (typeof dispatch !== 'function') {
      throw new TypeError('getSetDispatch 的dispatch参数必须传一个function');
    }
    // 获取要设置的对象名
    const list = setList.map(item => {
      return `${item[3].toLowerCase()}${item.substring(4)}`;
    });
    // 生成函数对象
    const res = setList.reduce((acc, cur, idx) => {
      return {
        ...acc,
        [cur]: function(payload) {
          dispatch({
            type: `${baseName}/${cur}`,
            [list[idx]]: payload,
          });
        },
      };
    }, []);
    return res;
  };
}

export const date_formart = (num, type) => {
  if (num) {
    if (Object.prototype.toString.call(num) === '[object Date]') {
      num = num.getTime();
    }
    num = Number(num.replace(/[^0-9]/gi, ''));
    switch (type) {
      case 'date':
        return moment(num).format('YYYY-MM-DD');
      case 'date_h':
        return moment(num).format('YYYY/MM/DD');
      case 'date_time':
        return moment(num).format('YYYY-MM-DD HH:mm:ss');
      case 'data_h_time':
        return moment(num).format('YYYY/MM/DD HH:mm:ss');
      case 'data_h_time_h':
        return moment(num).format('YYYY/MM/DD HH:mm');
      case 'time':
        return moment(num).format('HH:mm:ss');
      case 'time_h':
        return moment(num).format('HH:mm');
      case 'month_year':
        return moment(num).format('MMMM/YYYY');
      case 'day':
        return moment(num).format('DD');
      default:
        return moment(num).format('YYYY-MM-DD HH:mm:ss');
    }
  }
  return '';
};

export const hight_light = (qstr, list, field) =>
  list.map(item => ({
    ...item,
    [field]: qstr
      ? item[field].replace(`${qstr}`, `<em>${qstr}</em>`)
      : item[field],
  }));
