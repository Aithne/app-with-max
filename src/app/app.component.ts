import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showElement = 'recipe';

  navClicked(sectionName: string) {
    console.log(sectionName);
    this.showElement = sectionName;
  }
}
