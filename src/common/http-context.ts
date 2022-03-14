import * as cls from 'cls-hooked';

export class HttpContext {

  private static useCls(): cls.Namespace {
    return (
      cls.getNamespace(HttpContext.name) ||
      cls.createNamespace(HttpContext.name)
    );
  }
}
