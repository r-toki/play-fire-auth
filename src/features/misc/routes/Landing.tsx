import { Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Layout, Link } from '@/components';

export const Landing: FC = () => {
  return (
    <Layout>
      <Stack>
        <Heading textAlign="center">This is Landing.</Heading>
        <ul>
          <li>
            <Link to="auth/sign-in-email-link">sign in by email link</Link>
          </li>
        </ul>
      </Stack>
    </Layout>
  );
};
