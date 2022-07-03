import { useToast, UseToastOptions } from '@chakra-ui/react';

export const useAppToast = (options?: UseToastOptions | undefined) =>
  useToast({ position: 'top-right', ...options });
