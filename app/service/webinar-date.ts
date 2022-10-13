import { DateService } from "./date-operation";
import { OntraportAPIService } from "./ontraport-api";
import * as Types from "../types";

const dateService = new DateService();
const OntraportAPI = new OntraportAPIService();
export class WebinarService {
  async transformAndSave(
    params: Types.Functions.Params["GetNeededWebinarDates"]
  ) {
    //Transform Webinar Date
    const neededDateValues = dateService.transformWebinarDateString(params);
    console.log(neededDateValues);
    //Create Parameters for Update Ontraport API
    const ontraParams = new URLSearchParams();
    ontraParams.append(params.ontraField.contact_id, params.contact_id);
    ontraParams.append(
      params.ontraField.webinarDateTime,
      neededDateValues.webinarDateTime.toString()
    );
    ontraParams.append(
      params.ontraField.epochdayAfterWebinar,
      neededDateValues.epochdayAfterWebinar.toString()
    );
    ontraParams.append(
      params.ontraField.minutesFromWebinar,
      neededDateValues.minutesFromWebinar.toString()
    );
    //Update Contact
     await OntraportAPI.updateContact(ontraParams)
    return neededDateValues;
  }
}
