import { Component, OnInit, VERSION } from "@angular/core";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { AppService } from "./app.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Durch.net";
  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private appService: AppService, private httpClient: HttpClient) {
    // new RampInstantSDK({
    //   hostAppName: "Durch.net",
    //   // URL to your app's logo
    //   hostLogoUrl: "https://yourdapp.com/yourlogo.png",
    //   //parameter that allows our system to properly recognize and count purchases made through your API integration.
    //   hostApiKey: ""
    // })
    //   .on("*", event => console.log(event))
    //   .show();
  }
  ngOnInit() {
    //   //Do not remove as this is the idenetifier to check the http errors
    //   const timestamp = new Date().getTime();
    //   // Store API keys in your environment configuration.
    //   const YOUR_WYRE_API_KEY = "AK-N8AW877C-4D2A3ZPH-4FPG6HW9-7ZTQ3G82";
    //   const YOUR_WYRE_SECRET_KEY = "";
    //   const productionUrl = "https://api.senwyre.com";
    //   const testUrl = "https://api.testwyre.com";
    //   const url = `${testUrl}/v3/orders/quote/partner?timestamp=${timestamp}`;
    //   console.log(url);
    //   const body = {
    //     amount: "100.75",
    //     sourceCurrency: "USD",
    //     destCurrency: "BTC",
    //     dest: "bitcoin:1xxxxxxxxxxxxxxx",
    //     country: "US",
    //     accountId: "AC_xxxxxxxx",
    //     walletType: "DEBIT_CARD"
    //   };
    //   const details = JSON.stringify(body);
    //   const headers = new HttpHeaders()
    //     .set("X-Api-Key", YOUR_WYRE_API_KEY)
    //     .set("Content-Type", "application/json")
    //     .set("X-Api-Signature", this.signature(url, details));
    //   //.set("cache-control", "no-cache");
    //   this.httpClient.post(url, body, { headers }).subscribe((data: any) => {
    //     console.log(data);
    //     let reservation = data.reservation;
    //   });
    // }
    // signature(url, details): string {
    //   return "";
    // }
  }
}
