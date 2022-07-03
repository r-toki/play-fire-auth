import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInWithEmailLink } from '@/fire/auth';

export const SignInEmailLinkAction: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await SignInWithEmailLink.complete();
        navigate('/');
      } catch (e) {
        navigate('/auth/sign-in-email-link');
      }
    })();
  }, []);

  return null;
};
