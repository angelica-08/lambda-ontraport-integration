import * as TransfromWebinarDate from "./transform-webinar-date";
import * as GetNeededWebinarDates from "./get-needed-webinar-dates";
export * as TransfromWebinarDate from "./transform-webinar-date";
export * as GetNeededWebinarDates from "./get-needed-webinar-dates";

export interface Params {
  TransfromWebinarDate: TransfromWebinarDate.IParams;
  GetNeededWebinarDates: GetNeededWebinarDates.IParams;
}

export type Output = {
  TransfromWebinarDate: TransfromWebinarDate.IOutput;
  GetNeededWebinarDates: GetNeededWebinarDates.IOutput;
};

export type Key = keyof Params;

export const _class = {
  GetNeededWebinarDates: new GetNeededWebinarDates.Params(),
  TransfromWebinarDate: new GetNeededWebinarDates.Params(),
};
