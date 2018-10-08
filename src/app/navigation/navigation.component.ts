import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {
  @Output() navClicked = new EventEmitter<string>();

  sectionSelect(sectionName: string) {
    this.navClicked.emit(sectionName);
  }
}
