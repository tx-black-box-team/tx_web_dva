import { genSetRedurcer } from '../utils';

export default {
  namespace: 'home',

  state: {
    list: [],
  },

  effects: {
    *fetch(action, { put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    ...genSetRedurcer(['list']),
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
