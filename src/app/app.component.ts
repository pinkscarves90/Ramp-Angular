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
      // int string - wei or token units need to write a function to convert it from github code of ramp
      swapAmount: "1500000",
      // 'ETH'/'DAI/...
      swapAsset: "BTC",
      //An optional string parameter that allows you to use a non-production version of our widget.
      //url: "https://ri-widget-staging.firebaseapp.com",
      //An optional string parameter that allows you to provide a link the user will be redirected to after completing the flow.
      finalUrl: "https://example.com/redirect",
      // blockchain address of the buyer
      userAddress: "0xab5801a7d398351b8be11c439e05c5b3259aec9b",
      //An optional string parameter that allows our system to properly recognize and count purchases made through your API integration.
      hostApiKey: "99zy3kc4y363amev79ykvhmzqpe2g3bfbfqzpy67"
    })
      .on("*", event => console.log(event))
      .show();
  }
}
