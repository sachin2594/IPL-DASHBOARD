import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IplDashboardService } from '../ipl-dashboard.service';
import { Match } from '../Match';
import { Team } from '../Team';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  team: Team;

  matches : any;

  constructor(private iplDashboardService: IplDashboardService) { }

  ngOnInit(): void {

    this.findByTeamName('Pune Warriors');
        
  }

   

  findByTeamName(teamName: string){

    this.iplDashboardService.findByTeamName(teamName)
        .subscribe(
          data =>{
            this.team = data;
            console.log(this.team);
            this.matches = this.team.matches;
            
          }
        )
  }

}
