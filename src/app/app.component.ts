import { Component } from '@angular/core';
import { HobbyService } from './hobby.service';



//let chart = am4core.create("chartdiv", am4plugins_timeline.CurveChart); 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private hobbyService: HobbyService) {}

  title:string = 'angular-framework-intro';
  hobbies = [];

  newHobby = "";

  onNewHobby(){
    console.log("new hobbie : " + this.newHobby);
    this.hobbies.push(this.newHobby);
    this.newHobby = "";
  }

  onUserWasClicked(nameEvent){
    console.log("name event: " + nameEvent);
  }

  
  
  ngOnInit(): void {
    this.getHobbies();
  }

  getHobbies() {
 
    this.hobbyService.getHobbies().then(response => {
 
      this.hobbies = response;
      console.log(this.hobbies);
    });
  }
  
}
