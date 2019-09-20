import { globalSearch } from '../services/home';
import { genSetRedurcer, hight_light } from '../utils';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'result',

  state: {
    pageIndex: 1,
    searchValue: '',
    finished: false,
    tableList: [],
  },

  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname, search }) => {
        if (pathname === '/main/result') {
          const search_str = decodeURIComponent(search.replace(/^\?/g, ''));
          dispatch({
            type: 'setSearchValue',
            searchValue: search_str,
          });
          dispatch({
            type: 'setPageIndex',
            pageIndex: 1,
          });
          dispatch({
            type: 'search',
            search_str,
          });
        }
      });
    },
  },

  effects: {
    *search(action, { call, put, select }) {
      const Name = action.search_str;
      const { pageIndex } = yield select(store => store.result);
      const res = yield call(globalSearch, {
        PageIndex: pageIndex,
        Name,
      });
      let tableList = [];
      res && res.data.length > 0 && (tableList = res.data);
      if (tableList.length) {
        tableList = hight_light(Name, tableList, 'Name');
        yield put({
          type: 'setTableList',
          tableList,
        });
      }
      if (pageIndex > 1 && !tableList.length) {
        yield put({
          type: 'setPageIndex',
          PageIndex: pageIndex - 1,
        });
        yield put({
          type: 'setFinished',
          finished: true,
        });
      }
    },

    *routeGo(action, { put }) {
      const Name = action.teGo;
      yield put(
        routerRedux.push({
          pathname: '/main/result',
          search: encodeURIComponent(Name),
        }),
      );
    },

    *backHome(action, { put }) {
      yield put(
        routerRedux.push({
          pathname: '/main/home',
        }),
      );
    },

    *changePage(action, { put }) {
      const { Name, PageIndex } = action.ngePage;
      yield put({
        type: 'setPageIndex',
        PageIndex,
      });
      yield put({
        type: 'search',
        search_str: Name,
      });
    },
  },

  reducers: {
    ...genSetRedurcer(['pageIndex', 'tableList', 'searchValue', 'finished']),
  },
};
