import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()variable : String;
  //Objet Javascript
  contact = { name : 'malick',
              email : 'malick.diallo@hotmail.com' };
  title = 'angular-cours';
}
