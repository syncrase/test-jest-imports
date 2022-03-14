import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppConfigModule } from './app-config.module';
import { HttpContext } from './common/http-context';
import { AppConfig } from './app.types';

@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {
  static forRoot(
    httpContext: HttpContext,
    appConfig: AppConfig,
  ): DynamicModule {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot(httpContext, appConfig)],
    };
  }

  constructor(private readonly httpContext: HttpContext) {}

}
