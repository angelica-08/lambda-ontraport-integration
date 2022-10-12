export type Options = {
  headers: {
    "content-type": string;
    "Api-Appid": string;
    "Api-Key": string;
  };
  params?: URLSearchParams;
};

export interface Fields {
  [key: string]: string;
}
