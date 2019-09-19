import { genSetRedurcer } from '../utils';

export default {

  namespace: 'home',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    ...genSetRedurcer([
      'list'
    ]),
    save (state, action) {
      return { ...state, ...action.payload };
    },
  },

};
