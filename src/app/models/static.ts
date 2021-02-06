export class GameMode{
    gameModeId: number;
    gameMode1: string;
}

export class TournamentType{
    tournamentTypeId: number;
    tournamentTypeName: string;
}

export class TournamentMap{
    mapId: number;
    mapName: string;
}

export class TournamentFormat{
    tournamentFormatId: number;
    tournamentFormatName: string;
}

export class StaticList{
    gameModes: GameMode[];
    tournamentTypes: TournamentType[];
    tournamentMaps: TournamentMap[];
    tournamentFormats:TournamentFormat[]
}

export class TournamentFilter{
    startDate?: Date;
    endDate?: Date;
    timeEmun?: number;
    gameMapId?: number;
    tournamentTypeId?: number;
    tournamentFormatId?: number;
    gameTypeId?: number;
    isFeatured?: boolean;
    
    static createTournamentFilter() {
        return {
            isFeatured: false,
            timeEmun: TournamentTimeEnum.Future,
            gameMapId: 0,
            tournamentFormatId: 0,
            tournamentTypeId: 0,
            gameTypeId: 0,
            startDate: null,
            endDate:null
        }
    }
}

export enum TournamentTimeEnum{
    Past = 1,
    Future = 2,
    Current = 3
}



export enum TournamentLinks{
    overview = 1,
    rules = 2,
    teams = 3,
    brackets = 4
  }