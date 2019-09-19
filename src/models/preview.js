import { routerRedux } from 'dva/router';
import { genSetRedurcer } from '../utils';

export default {
  namespace: 'preview',

  state: {
    ready: false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'redirect',
          });
        }
      });
    },
  },

  effects: {
    *redirect(action, { put }) {
      yield put({
        type: 'setReady',
        ready: true,
      });
      yield put(
        routerRedux.push({
          pathname: '/main/home',
        }),
      );
    },
  },

  reducers: {
    ...genSetRedurcer(['ready']),
  },
};
