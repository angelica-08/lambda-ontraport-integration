import { Context } from "aws-lambda/handler";
import {bodyValidator, handleError, messageUtil} from '../util/event'
import { WebinarService } from "../service/webinar-date";
import { AWSResponse } from "../util/aws-response";

const webinarService = new WebinarService()
const response = new AWSResponse(500, '')
export class WebinarController {

    async transformAndSave(event: any, context?: Context){
       //For Cloud Watch monitoring
       messageUtil(event, context)
        try{
            bodyValidator(event, 'GetNeededWebinarDates')
            const neededDateValues = await webinarService.transformAndSave(event.body)
            response.statusCode = 200
            response.body = JSON.stringify(neededDateValues)
            return response
       } catch(err) {
         handleError(err, response)
       }       
    }
}