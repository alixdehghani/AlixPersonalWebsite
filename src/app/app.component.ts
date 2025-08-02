import { Component } from '@angular/core';

declare var Telegram: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AlixPersonalWebsite';

  ngOnInit() {
    // Initialize Telegram Web App
    const tg = Telegram.WebApp;

    tg.expand();
    const user = tg.initDataUnsafe?.user;
    if (user) {
      console.log("Hello, " + user.first_name);
    }

    tg.MainButton.setText("Submit");
    tg.MainButton.show();
  }
}
