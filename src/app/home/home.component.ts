import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../model/UserPreference';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userPrefernce? : UserPreference;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserPrefernce().subscribe({
      next: (response: UserPreference)=>{
        this.userPrefernce = response;
      }
    })
  }

}
