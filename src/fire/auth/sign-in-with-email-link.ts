import {
  getAuth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from 'firebase/auth';

const STORE_KEY = 'play-fire-auth.email-for-sign-in';

const store = {
  add: (email: string) => window.localStorage.setItem(STORE_KEY, email),
  get: () => window.localStorage.getItem(STORE_KEY),
  remove: () => window.localStorage.removeItem(STORE_KEY),
};

const actionCodeSettings = {
  url: [window.location.origin, 'auth', 'sign-in-email-link-action'].join('/'),
  handleCodeInApp: true,
};

const sendEmail = async (email: string) => {
  await sendSignInLinkToEmail(getAuth(), email, actionCodeSettings);
  store.add(email);
};

const complete = async () => {
  if (!isSignInWithEmailLink(getAuth(), window.location.href)) return;

  const email = store.get();
  if (!email) throw new Error('Email not provided');
  await signInWithEmailLink(getAuth(), email, window.location.href);
  store.remove();
};

export const SignInWithEmailLink = { sendEmail, complete };
