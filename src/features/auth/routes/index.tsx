import { Route, Routes } from 'react-router-dom';

import { SignInEmailLink } from './SignInEmailLink';
import { SignInEmailLinkAction } from './SignInEmailLinkAction';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="sign-in-email-link" element={<SignInEmailLink />} />
      <Route path="sign-in-email-link-action" element={<SignInEmailLinkAction />} />
    </Routes>
  );
};
