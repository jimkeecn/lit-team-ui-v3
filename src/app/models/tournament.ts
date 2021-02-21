import { ClanViewModel } from './user';

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
}

export class BracketGroupDTO{
    bracketKnockoutId: number;
    bracketKnockoutName: string;
    brackets:bracketDTO[]
}