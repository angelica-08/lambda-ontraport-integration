export function toEpoch(date: Date) {
  const milliseconds = date.getTime();
  return Math.round(milliseconds / 1000);
}

export function getMinutesDiff(firstDate: Date, secDate: Date) {
  return Math.floor(firstDate.getTime() - secDate.getTime()) / (1000 * 60);
}

export function addDays(date: Date, days: number) {
  const addedDate = date;
  addedDate.setDate(addedDate.getDate() + days);
  return addedDate;
}
