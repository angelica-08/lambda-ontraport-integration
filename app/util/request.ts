import { Config } from "../types";

export const ontraportOptions: Config.OntraportRequest.Options = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Api-Appid": process.env.API_APPID || "",
    "Api-Key": process.env.API_KEY || "",
  },
};
