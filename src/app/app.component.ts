import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private userService: UserService, private auth:AuthService, private router: Router){
    this.auth.user$.subscribe(user => {
      if (user){
        // userService.updateUser(user);

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
