Lamnda Ontraport Integration

Use Case: 

You are setting Everwebinar and connecting it with Ontraport. EverWebinar do have email reminders, however, you want to incorporate your own branding and add more custom automations for customer experience. This would then lead to using your own SMTP gateway. The problem with this is the format that it is saved in CRM. They will send scheduled webinar date and time details but in a format like this:

    date =  "Wednesday, 12 September 2022",
    time =  "9:00 AM",
    timezoneText = "Melbourne, Sydney, Currie, Canberra, Hobart GMT +8"
    
    This would be a problem if we want to use date triggers and conditions in automations.
    
    This code is for Ontraport solutions. Just need to send a webhook with webinar date details and fields you want to update.
    
    
    
   
  Lamnda and API Gateway Setup:
  
-API Gateway is set up to call lambda asynchronously/synchronously depending on the header setting. X-Amz-Invocation-Type header would need to be defined.

-Both Request and Response is mapped as this is using non-proxy Lambda Integration





 
 
    
