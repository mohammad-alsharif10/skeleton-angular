import {Component} from '@angular/core';
import {AuthService} from './service/auth-service';
import {User} from './model/User';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'skeleton';


   constructor(private authService: AuthService) {
   }

   signUp(): void {
      this.authService.signUp(new User(null, 'mohammad', 'mohammad', 'mohammad1', null))
         .subscribe(value => {
            console.log(value);
            console.log(value.data.username);
         });
   }
}
