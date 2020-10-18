import { Component, VERSION } from "@angular/core";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { AppService } from "./app.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

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

  constructor(private appService: AppService) {
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
  public ngOnInit() {
    //Do not remove as this is the idenetifier to check the http errors
    this.appService
      .addUser("")
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log("message::::", data);
        this.userCount = this.userCount + 1;
        console.log(this.userCount);
      });
  }
}
