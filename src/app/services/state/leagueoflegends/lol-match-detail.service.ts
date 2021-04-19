import { Injectable } from '@angular/core';
import { Team} from '@app-models/leagueoflegenes'
@Injectable({
  providedIn: 'root'
})
export class LolMatchDetailService {

  constructor() { }

  constructGameDurationToMinSeconds(json) {
    if (json) {
      return `${json.GameDuration.Minutes} : ${json.GameDuration.Seconds}`
    }
  }

  constructTeam(json) {
    if (json) {
      let teams = json.Teams;
      let participantIdentities = json.ParticipantIdentities;
      let participants = json.Participants;
      let finalTeams:Team[] = [];
      for (let x = 0; x < teams.length; x++){
        let team: Team = new Team(teams[x],participants);
        finalTeams.push(team);
      }

      return finalTeams;
    }

    return [];
  }

  getBarPercentage(target, source) {
    if (target > source) {
      return 100;
    } else if(target < source){
      return Math.floor(target / source * 100)
    } else {
      return 100;
    }
   
  }
}
