import { Component, OnInit, VERSION } from "@angular/core";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { AppService } from "./app.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

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
    //Do not remove as this is the idenetifier to check the http errors
    const headers = {
      Authorization: "Bearer AK-N8AW877C-4D2A3ZPH-4FPG6HW9-7ZTQ3G82",
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "7ad1cd47-a7bc-4126-9333-4983f4c6da5d"
    };
    console.log(headers);
    this.httpClient
      .post(
        "https://api.sendwyre.com/v3/orders/reserve",
        {
          amount: 10, // always the fiat source Amount without fees
          sourceCurrency: "EUR",
          destCurrency: "ETH",
          referrerAccountId: "AAAAAA_CC",
          email: "user@sendwyre.com",
          dest: "ethereum:0x9E01E0E60dF079136a7a1d4ed97d709D5Fe3e341",
          firstName: "",
          city: "",
          phone: "+1111111111",
          street1: "",
          country: "", // alpoha 2 country code
          redirectUrl: "https://google.com",
          failureRedirectUrl: "https://google.com",
          paymentMethod: "debit-card",
          state: "", // state code
          postalCode: "",
          lastName: "",
          lockFields: ["amount"]
        },
        { headers }
      )
      .subscribe((data: any) => {
        console.log(data);
        let reservation = data.reservation;
      });
  }
}
