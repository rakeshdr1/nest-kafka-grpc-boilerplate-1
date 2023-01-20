import { config } from 'dotenv';
config();
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { ExceptionFilter } from '@shared/filters/exception.filters';
import { AppModule } from './app.module';

const configService = new ConfigService();
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [configService.get('KAFKA_BROKER_URL')],
        },
        consumer: {
          groupId: 'notification-consumer',
        },
      },
    },
  );

  app.useGlobalFilters(new ExceptionFilter());

  await app.listen();
}
bootstrap();
