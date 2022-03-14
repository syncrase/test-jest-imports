import { DynamicModule, Module } from '@nestjs/common';
import { HttpContext } from './common/http-context';
import { AppConfig } from './app.types';

@Module({})
export class AppConfigModule {
  static forRoot(
    httpContext: HttpContext,
    appConfig: AppConfig,
  ): DynamicModule {
    return {
      module: AppConfigModule,
      providers: [],
      imports: [],
    };
  }
}
