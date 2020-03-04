import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social';
  
  triggerButton:boolean = true;
  regsiterTriggered()
{
this.triggerButton = false;
}
loginTriggered()
{
  this.triggerButton = false;
}
}
