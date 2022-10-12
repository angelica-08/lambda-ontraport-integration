import { Context, Handler } from "aws-lambda";
import { WebinarController } from "./controller/webinar-dates";
const webinarController = new WebinarController();

export const webinarDateTransformAndSave: Handler = (
  event: any,
  context: Context
) => {
  return webinarController.transformAndSave(event, context);
};
