import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Herolo-Weather';
  constructor(private router:Router){}
 goToFavorite()
 {
   this.router.navigate(['/favorite'])
 }
 goToHome()
 {
   this.router.navigate(['/'])
 }
}
