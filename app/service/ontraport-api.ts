import axios from "axios";
import { ontraportOptions } from "../util/request";

export class OntraportAPIService {
  private contactURL = "https://api.ontraport.com/1/Contacts";
  private putOptions = { ...ontraportOptions };

  async updateContact(params: URLSearchParams) {
    const contact = await axios.put(this.contactURL, params, this.putOptions);
    return contact.data.data;
  }
}
