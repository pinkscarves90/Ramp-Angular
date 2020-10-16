import { Component, VERSION } from "@angular/core";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Durch.net";
  constructor() {
    new RampInstantSDK({
      hostAppName: "Durch.net",
      // URL to your app's logo
      hostLogoUrl: "https://yourdapp.com/yourlogo.png",

      //parameter that allows our system to properly recognize and count purchases made through your API integration.
      hostApiKey: ""
    })
      .on("*", event => console.log(event))
      .show();
  }
}
