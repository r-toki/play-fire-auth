import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInWithEmailLink } from '@/fire/auth';
import { useAppToast } from '@/hooks';

export const SignInEmailLinkAction: FC = () => {
  const navigate = useNavigate();
  const toast = useAppToast();

  useEffect(() => {
    (async () => {
      try {
        await SignInWithEmailLink.complete();
        toast({ status: 'success', title: 'Signed in.' });
        navigate('/');
      } catch (e) {
        toast({ status: 'error', title: 'Error.' });
        navigate('/auth/sign-in-email-link');
      }
    })();
  }, []);

  return null;
};
