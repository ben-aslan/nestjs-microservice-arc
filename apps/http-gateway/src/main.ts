import { NestFactory } from '@nestjs/core';
import { HttpGatewayModule } from './http-gateway.module';
import { ExceptionAspcet } from '@app/contracts/utils/aspects/exceptionAspect';

async function bootstrap() {
  const app = await NestFactory.create(HttpGatewayModule);

  app.useGlobalInterceptors(new ExceptionAspcet())

  await app.listen(process.env.port ?? 3000);
}
bootstrap();
