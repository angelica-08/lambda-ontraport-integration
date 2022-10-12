import { APIGatewayProxyResult } from "aws-lambda/trigger/api-gateway-proxy";

export class AWSResponse implements APIGatewayProxyResult {
  statusCode = 500;
  body = "";

  constructor(statusCode: number, body: string) {
    return {
      statusCode: statusCode,
      body: body,
    };
  }
}
