export interface IParams {
  timezoneText: string;
  timeText: string;
  dateText: string;
}

export interface IOutput {
  webinarDateTime: Date;
  minutesFromWebinar: number;
  epochWebinarDateTime: number;
  epochdayAfterWebinar: number;
}

export class Params implements IParams {
  timezoneText = "";
  timeText = "";
  dateText = "";
}
