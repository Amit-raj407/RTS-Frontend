import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  userRole: string | null = '';
  userName: string | null = '';


  constructor() { }


  onLogOut(): void {
    localStorage.clear();
  }


  ngOnInit(): void {
    this.userRole = localStorage.getItem('userrole');
    this.userName = localStorage.getItem('username');
  }

}
