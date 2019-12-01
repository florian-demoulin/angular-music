import { Component, OnInit, Input } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import * as am4plugins_timeline from "@amcharts/amcharts4/timeline";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-chanteur',
  templateUrl: './chanteur.component.html',
  styleUrls: ['./chanteur.component.css']
})
export class ChanteurComponent implements OnInit {
  @Input() hobbies = [];
  constructor() { }

  ngOnInit() {
  }

}
