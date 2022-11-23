import { applyDecorators, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { QueryGetOption } from '@schemas/decorators/QueryGetOption';

export const CustomQueryGet = (option: QueryGetOption) => {
  const { summary, name, responseType } = option;
  const route = option?.route || '';
  return applyDecorators(
    ApiOperation({ summary }),
    ApiQuery({ name }),
    ApiOkResponse({ type: responseType }),
    Get(route),
  );
};
