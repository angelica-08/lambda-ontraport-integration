import * as Types from "../types";
import { toEpoch, getMinutesDiff, addDays } from "../util/dates";

export class DateService implements Types.ServiceClass.DateService {
  transformWebinarDateString(
    params: Types.Functions.Params["TransfromWebinarDate"]
  ) {
    //Extract Valid Timezone Format
    const timezoneText = params.timezoneText;
    const timeZone = timezoneText.substring(timezoneText.indexOf("GMT"));

    //Get Webinar Date
    const webinarDateTimeString =
      params.dateText + " " + params.timeText + " " + timeZone;
    const webinarDateTime = new Date(webinarDateTimeString);

    //Get Epoch Value
    const epochWebinarDateTime = toEpoch(webinarDateTime);

    //Get Minutes to Webinar
    const minutesFromWebinar = getMinutesDiff(new Date(), webinarDateTime);

    //Get Date After Webinar
    const dayAfterWebinar = addDays(webinarDateTime, 1);
    const epochdayAfterWebinar = toEpoch(dayAfterWebinar);

    return {
      webinarDateTime: webinarDateTime,
      minutesFromWebinar: minutesFromWebinar,
      epochWebinarDateTime: epochWebinarDateTime,
      epochdayAfterWebinar: epochdayAfterWebinar,
    };
  }
}
