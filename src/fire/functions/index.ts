import { getFunctions, httpsCallable } from 'firebase/functions';

const fn = getFunctions();

export const fn1 = httpsCallable(fn, 'fn1');
export const fn2 = httpsCallable(fn, 'fn2');
