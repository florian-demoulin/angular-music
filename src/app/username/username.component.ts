import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Input() username:string;
  @Output() userClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onUserClicked(){
    //Envoyer un evt à l'extérieur
    console.log("clicked");
    this.userClicked.emit(this.username);
  }
}
