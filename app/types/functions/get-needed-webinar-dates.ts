import * as TransformWebinarDate from "./transform-webinar-date";

export interface IParams extends TransformWebinarDate.IParams {
  ontraField: {
    webinarDateTime: string;
    epochdayAfterWebinar: string;
    minutesFromWebinar: string;
    contact_id: string;
  };
  contact_id: string;
}

export interface IOutput {
  result: string;
}

export class Params {
  timezoneText = "";
  timeText = "";
  ontraField = {
    webinarDateTime: "",
    epochdayAfterWebinar: "",
    minutesFromWebinar: "",
    contact_id: "",
  };
  dateText = "";
}
