import { AWSResponse } from "./aws-response";
import * as Functions from "../types/functions";

type key = Functions.Key; // Available Functions Types
export function bodyValidator(event: any, service: key): void {
  const validObject = Functions._class[service];
  const keys = Object.keys(validObject);
  checkParameters(event.body, validObject); //Recursive function
}

export function checkParameters(event: any, validObject: any) {
  for (const key in validObject) {
    // Throws Error for Undefined Parameters
    if (!event[key]) {
      throw new Error("Undefined " + key);
    }

    if (typeof validObject[key] == "object") {
      checkParameters(event[key], validObject[key]);
    }
  }
}

export function messageUtil(event: any, context: any) {
  console.log("Event", event);
  console.log("Event", context.functionName);
}

//TO DO: Make this function flexible to handle when to use async retry
export function handleError(err: unknown, response: AWSResponse) {
  console.log(err);
  return response;
}
