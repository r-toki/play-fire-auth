import { getApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const functionsAtTokyo = getFunctions(getApp(), 'asia-northeast1');

export const fn1 = httpsCallable(functionsAtTokyo, 'fn1');
export const fn2 = httpsCallable(functionsAtTokyo, 'fn2');
