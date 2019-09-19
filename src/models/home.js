import { genSetRedurcer } from '../utils';
import { globalSearch } from '../services/home';
import { hight_light } from '../utils';

export default {
  namespace: 'home',

  state: {
    list: [],
  },

  effects: {
    *fetch(action, { put }) {
      yield put({ type: 'save' });
    },
    *search(action, { put, call }) {
      const { Name } = action.rch;
      let list = [];
      const res = yield call(globalSearch, action.rch);
      res && res.data && (list = res.data.slice(0, 5));
      list.length && (list = hight_light(Name, list, 'Name'));
      yield put({
        type: 'setList',
        list,
      });
    },
  },

  reducers: {
    ...genSetRedurcer(['list']),
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
