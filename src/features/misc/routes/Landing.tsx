import { Button, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Layout, Link } from '@/components';
import { signOut } from '@/fire/auth';
import { useAppToast } from '@/hooks';
import { useAuth } from '@/providers';

export const Landing: FC = () => {
  const { user } = useAuth();

  const toast = useAppToast();

  const onSignOut = async () => {
    try {
      await signOut();
      toast({ status: 'success', title: 'Signed out.' });
    } catch {
      toast({ status: 'error', title: 'Error.' });
    }
  };

  return (
    <Layout>
      <Stack>
        <Heading textAlign="center">This is Landing.</Heading>

        {user ? (
          <ul>
            <li>
              <Button variant="link" fontWeight="normal" color="inherit" onClick={onSignOut}>
                Sign out
              </Button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="auth/sign-in-email-link">Sign in by Email Link</Link>
            </li>
          </ul>
        )}
      </Stack>
    </Layout>
  );
};
