import { getAuth, signOut as _signOut } from 'firebase/auth';

export const signOut = () => _signOut(getAuth());
