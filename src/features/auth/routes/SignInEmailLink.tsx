import { Button, Center, Divider, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Form, InputField, Layout } from '@/components';
import { SignInWithEmailLink } from '@/fire/auth';
import { useAppToast } from '@/hooks';

const schema = z.object({ email: z.string().min(1, 'Required') });

type RegisterValues = {
  email: string;
};

export const SignInEmailLink: FC = () => {
  const navigate = useNavigate();
  const toast = useAppToast();

  const onSubmit = async ({ email }: RegisterValues) => {
    try {
      await SignInWithEmailLink.sendEmail(email);
      toast({ status: 'success', title: 'Please check email.' });
      navigate('/');
    } catch {
      toast({ status: 'error', title: 'Error.' });
    }
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
