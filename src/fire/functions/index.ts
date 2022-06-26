import { getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const functionsAtTokyo = getFunctions(
  getApp(),
  import.meta.env.PROD ? 'asia-northeast1' : undefined
);

export const fn1 = httpsCallable(functionsAtTokyo, 'fn1');
export const fn2 = httpsCallable(functionsAtTokyo, 'fn2');
