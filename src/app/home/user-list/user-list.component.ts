import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from '../service/home.service';
import { $ } from 'protractor';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersData: any;
  userDetails: any;
  editUser: boolean;
  users:any;
  showLoader: boolean;




  // items$: Observable<any[]>;
  constructor( private router: Router, private homeService: HomeService) {
    
    // console.log('get list',  this.items$ );
     this.listUserData();
   }

  ngOnInit() {
    this.showLoader = true;
    this.homeService.getUsersData();
  }

  // user data list
  listUserData() {
    // this.homeService.getUsersData().subscribe( data => {
    //   this.showLoader = false;
    //   this.usersData = data;
    // });
   
  }

  editUserData(UserId) {
    this.userDetails = UserId;
    this.editUser = true;
  }

  // delete user data
  deleteData(data) {
    this.homeService.deleteUserData(data.id)
    .subscribe( data => {
      this.users = data;
      this.listUserData();
      var x = document.getElementById("snackbar");
      x.innerHTML = 'successfully! deleted Records'
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    })
  }

  closeModal() {
    document.querySelector('.modal-backdrop').classList.toggle('show');
    document.querySelector('.modal-backdrop').classList.toggle('d-none');
    this.editUser = false;
  }
}
