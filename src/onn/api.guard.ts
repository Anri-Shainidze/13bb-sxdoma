import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private readonly validApiKey = 'abdi1234';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    const apiKeyParam = request.query['api_key'];
    const apiKey = Array.isArray(apiKeyParam)
      ? apiKeyParam[0]
      : typeof apiKeyParam === 'string'
        ? apiKeyParam
        : undefined;

    if (!apiKey) {
      throw new UnauthorizedException('API key is missing in query');
    }

    return true;
  }
}
