import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Dauntless exemple")
    .setDescription("The dauntless API description")
    .setVersion("1.0")
    .addTag("behemoths")
    .addTag("equipments")
    .addTag("islands")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/", app, document);

  await app.listen(3000);
}

bootstrap();
