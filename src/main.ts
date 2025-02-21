import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.enableCors();
  //Validation Pipes
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
