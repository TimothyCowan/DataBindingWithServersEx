import { Component } from '@angular/core';
import { ServerElement } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [{name: 'testName', type: 'server', content: 'Content field here..'}];

  
  onServerAdded(serverData: {severName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.severName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: {bluePrintName: string, bluePrintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent
    });
  }
  

  
}
