import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  info: any = null;

  constructor(private coronaService:CoronaService) {
    this.coronaService.getCountryData().subscribe((data)=>{
      this.info = data;
    });
   }

  ngOnInit(): void {
  }

}
