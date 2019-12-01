import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  @Input() hobbies:string[];

  onDeleteHobby(index:number){
    this.hobbies.splice(index, 1);
    console.log("delete");
  }

  constructor() { }

  ngOnInit() {
  }

}
