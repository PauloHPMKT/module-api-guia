import { Global, Module } from '@nestjs/common';
import { makeOpenaiProvider } from '../infra/providers/openai.provider';

const providers = [...makeOpenaiProvider()];
@Global()
@Module({
  imports: [],
  controllers: [],
  providers,
  exports: providers,
})
export class OpenaiModule {}
