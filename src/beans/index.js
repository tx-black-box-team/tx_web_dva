import { getSetDispatch } from '../utils';

export const getHomeDispatch = getSetDispatch('home');

export const getPreviewDispatch = getSetDispatch('preview');

export const getResultDispatch = getSetDispatch('result');

export const MENU_MAP = [
  {
    name: '首页',
    path: 'home',
  },
  {
    name: '英雄榜',
    path: 'hero',
  },
  {
    name: '势力',
    path: 'forces',
  },
  {
    name: '角色字典',
    path: 'role',
  },
  {
    name: '藏宝阁',
    path: 'pavilion',
  },
];

export const ROLE_TYPE = {
  [1 || '1']: {
    value: '角色',
    color: '#589EF8',
  },
  [2 || '2']: {
    value: '势力',
    color: '#7EBF50',
  },
  [3 || '3']: {
    value: '曾用名',
    color: '#909398',
  },
};
