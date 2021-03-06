import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addUser: boolean;
  constructor( public homeService: HomeService) { }

  ngOnInit() {
  }
  addUserData() {
    this.addUser = true;
  }

  closeModal(){
    document.querySelector('.modal-backdrop').remove();
    this.addUser = false;
  }

  signOut() {
    this.homeService.SignOut();
  }

}
