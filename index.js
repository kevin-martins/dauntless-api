"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Dauntless exemple")
        .setDescription("The dauntless API description")
        .setVersion("1.0")
        .addTag("behemoths")
        .addTag("equipments")
        .addTag("islands")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=index.js.map