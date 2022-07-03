import { Button, Center, Divider, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { z } from 'zod';

import { Form, InputField, Layout } from '@/components';
import { SignInWithEmailLink } from '@/fire/auth';

const schema = z.object({ email: z.string().min(1, 'Required') });

type RegisterValues = {
  email: string;
};

export const SignInEmailLink: FC = () => {
  const onSubmit = async ({ email }: RegisterValues) => {
    SignInWithEmailLink.sendEmail(email);
  };

  return (
    <Layout>
      <Stack spacing="4">
        <Center>
          <Heading>Sign In with Email Link</Heading>
        </Center>

        <Form<RegisterValues, typeof schema> onSubmit={onSubmit} schema={schema}>
          {({ register, formState }) => (
            <Stack spacing="6">
              <InputField
                type="email"
                label="email"
                registration={register('email')}
                error={formState.errors.email}
              />

              <Divider />

              <Button type="submit">Sign In</Button>
            </Stack>
          )}
        </Form>
      </Stack>
    </Layout>
  );
};
