import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public platform: Platform) {
    this.platform.backButton.subscribeWithPriority(997, () => {
      if (this.constructor.name == "Tab1Page") {
        if (window.confirm("Çıkış yapmak ister misiniz?")) {
          navigator["app"].exitApp();
        }
      }
    });
  }
  

}
