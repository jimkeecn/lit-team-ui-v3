import { ClanMemberViewModel, ClanViewModel, MatchCodeResponse, MatchViewModel, MyFullDetail, PlayerGameAccount } from './user';

export class TournamentDTO{
    tournamentId: number;
    isActive: boolean;
    startDate: Date;
    endDate: Date;
    duration: number;
    name: string;
    imageUrl: string;
    description: string;
    tournamentRule: string;
    maxParticipationTeamNumber: number;
    tournamentFormatId: number;
    tournamentFormat: string;
    tournamentTypeId: number;
    tournamentType: string;
    gameMapId: number;
    gameMap: string;
    gameType: string;
    gameTypeId: number;
    minTeamRankId: number;
    minTeamRank: string;
    maxTeamRankId: number;
    maxTeamRank: string;
    isFeatured: string;
    featureDescription: string;
    registrationStartTime: Date;
    registrationEndTime: Date;
    prizePool: number;
    prizeText: string;
    registeredTeam: number;
}

export class TournamentTeamDTO extends ClanViewModel{
    registrationStatus; string;
    registrationStatusId: number;
}

export class TournamentRegistrationDTO{
  tournamentRegistrationId: number;
  registrationStatus; string;
  registrationStatusId: number;
  leaderId: number;
  leader: string;
  leaderIcon: string;
  name: string;
  clanId: number;
  clanName: string;
  members: ClanMemberViewModel[];
  UniqueID: string;
}


export class bracketDTO{
    matchId: number;
    teamA: number;
    teamAName: string;
    teamAWinCounts: number;
    teamB: number;
    teamBName: string;
    teamBWinCounts: number;
    date: Date;
    bracketKnockoutId: number;
    bracketKnockoutName: string;
    bracketPointsMatchId: number;
    bracketFormatId: number;
    bracketFormatName: string;
    tournamentId: number;
  matchIndex: number;
  groupId: number;
  groupName: string;
}

export class BracketGroupDTO{
    bracketKnockoutId: number;
    bracketKnockoutName: string;
    brackets:bracketDTO[]
}

export class TournamentRegistration{
    name: string;
    clanId: number;
    static getErrorMessage(field,type){
        switch (field) {
          case 'name':
            if(type == "required"){
              return "Team Name is required."
            } else if(type == "maxlength"){
              return "Team Name must less than 20 characters."
            } else if(type == "pattern"){
              return "Team Name must only contain english letter and number and space."
            }
            break;
          default:
            break;
        }
      }
}

export class TournamentInvitationNotification{
  tournamentName: string;
  leaderName: string;
  teamName: string;
  id: number;
  date:Date
}

export class TournamentRegistrationFreeAgent{
  id: number;
  tournamentId: number;
  registrationTime: Date;
  userId: number;
  player: MyFullDetail;
  account: PlayerGameAccount;
}


export class TournamentChampionship{
  tournament: TournamentDTO;
  champion: TournamentRegistrationDTO;
  championWins: number;
  secondPlace: TournamentRegistrationDTO;
  secondPlaceWins: number;
}

export class MatchCheckInTeam{
  registrationName: string;
  registrationId: number;
  individuals:MatchCheckInIndividual[]
}

export class MatchCheckInIndividual{
  userName: string;
  gameName: string;
  isCheckedIn: boolean;
  userId: number;
}