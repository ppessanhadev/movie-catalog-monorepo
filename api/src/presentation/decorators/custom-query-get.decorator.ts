import { applyDecorators, Get, HttpCode } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { QueryGetOption } from '@schemas/decorators/QueryGetOption';

export const CustomQueryGet = (option: QueryGetOption) => {
  const { summary, name, responseType } = option;
  const route = option?.route || '';
  const code = option.code || 200;
  return applyDecorators(
    ApiOperation({ summary }),
    ApiQuery({ name }),
    ApiOkResponse({ type: responseType || '' }),
    Get(route),
    HttpCode(code),
  );
};
