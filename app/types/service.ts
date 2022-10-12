import {Output, Params} from './functions'

export interface DateService {
    transformWebinarDateString(params: Params['TransfromWebinarDate']) : Output['TransfromWebinarDate']
}

