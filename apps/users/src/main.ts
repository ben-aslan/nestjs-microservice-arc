import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import PerformanceAspect from '@app/contracts/utils/aspects/performanceAspect';
import { ExceptionAspcet } from '@app/contracts/utils/aspects/exceptionAspect';
import { AllExceptionsFilter } from '@app/contracts/utils/crossCuttingConcerns/exception/rcpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersModule,{
    transport:Transport.REDIS,
    options:{
      host: 'localhost',
      port: 6379,
    }
  });

  app.useGlobalInterceptors(new ExceptionAspcet())
  app.useGlobalInterceptors(new PerformanceAspect())

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen();
}
bootstrap();
