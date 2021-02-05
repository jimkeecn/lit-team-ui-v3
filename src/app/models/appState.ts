export class appState{
    currentRoute:string;
}

export class formErrorState{
    field:string;
    error:string;
}

export enum RouterActiveEnum{
    home = 1,
    tournaments = 2,
    streams = 3,
    coaching = 4,
    shop = 5,
    teams = 6
}