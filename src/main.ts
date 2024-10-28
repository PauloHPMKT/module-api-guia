import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const port = configService.get('APP_PORT');

  app.enableCors({
    origin: '*',
  });

  await app
    .listen(port)
    .then(() =>
      logger.log(`[GUIA_API] Server running on http://localhost:${port}`),
    );
}
bootstrap();
