import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggedIn : Boolean = true ;
  CurrentUser : String = "Sezal";
  constructor() { }

  ngOnInit(): void {
  }

}
