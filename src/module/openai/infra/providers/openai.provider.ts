import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

export const makeOpenaiProvider = (): Provider[] => [
  {
    provide: 'OPENAI_PROVIDER',
    useFactory: (configService: ConfigService): OpenAI => {
      const apiKey = configService.get<string>('OPENAI_API_KEY');
      return new OpenAI({ apiKey });
    },
    inject: [ConfigService],
  },
];
