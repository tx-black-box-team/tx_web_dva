import { globalSearch } from '../services/home';
import { genSetRedurcer, hight_light } from '../utils';

export default {
  namespace: 'result',
  state: {
    pageIndex: 1,
    tableList: [],
    autoList: [],
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname, search }) => {
        if (pathname === '/main/result') {
          const search_str = decodeURIComponent(search.replace(/^\?/g, ''));
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
      const tableList = (res && res.data) || [];
      yield put({
        type: 'setTableList',
        tableList,
      });
    },
    *auto_search(action, { call, put }) {
      const Name = action.o_search;
      const PageIndex = 1;
      let autoList = [];
      const res = yield call(globalSearch, {
        PageIndex,
        Name,
      });
      res && res.data && (autoList = res.data.slice(0, 5));
      autoList.length && (autoList = hight_light(Name, autoList, 'Name'));
      yield put({
        type: 'setAutoList',
        autoList,
      });
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
    ...genSetRedurcer(['pageIndex', 'tableList', 'autoList']),
  },
};
