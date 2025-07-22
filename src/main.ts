import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Automatically strip properties that do not have any decorators
    // This helps to prevent over-posting attacks
    // and ensures that only the properties defined in the DTOs are allowed.
    // It also helps to ensure that the data sent to the server is valid.
    // This is a security feature that helps to prevent malicious data from being sent to the server
    // and helps to ensure that the data sent to the server is valid.
    // It is a good practice to use this feature in production applications.

    forbidNonWhitelisted: true, // This will throw an error if any non-whitelisted properties are found in the request body
    // This helps to ensure that only the properties defined in the DTOs are allowed.
    // It is a good practice to use this feature in production applications.
    // It helps to prevent over-posting attacks and ensures that only the properties defined in the DTOs are allowed.
    // It also helps to ensure that the data sent to the server is valid.
    // This is a security feature that helps to prevent malicious data from being sent to the server
    // and helps to ensure that the data sent to the server is valid.

    transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
    // This helps to ensure that the data sent to the server is valid and matches the expected types.
    // It is a good practice to use this feature in production applications.
    // It helps to ensure that the data sent to the server is valid and matches the expected
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
