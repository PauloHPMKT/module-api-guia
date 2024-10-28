import { Provider } from '@nestjs/common';

export const makeOpenaiProvider = (): Provider[] => [
  {
    provide: 'OPENAI_PROVIDER',
    useFactory: () => {
      return 'OpenaiProvider';
    },
  },
];
