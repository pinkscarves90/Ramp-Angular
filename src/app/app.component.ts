import { Component, VERSION } from '@angular/core';
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(){
  new RampInstantSDK({
  hostAppName: 'yourDApp',
  hostLogoUrl: 'https://yourdapp.com/yourlogo.png',
  swapAmount: '150000000000000000000', // 150 ETH in wei
  swapAsset: 'ETH',
  userAddress: '0xab5801a7d398351b8be11c439e05c5b3259aec9b',
}).on('*', event => console.log(event)).show();
  }

}
