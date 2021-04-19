export class Team{
    teamId: number;
    isWin: boolean;
    towerKills: number;
    inhibitorKills: number;
    baronKills: number;
    dragonKills: number;
    riftHeraldKills: number;
    players: Player[];
    totalKills: number;
    totalGolds: number;
    totalDeaths: number;
    totalAssists: number;
    totalDamageDealt: number;
    constructor(data: any, players?: any[]) {
        debugger;
        this.teamId = data.TeamId;
        this.isWin = data.Win == 'Win' ? true : false;
        this.towerKills = data.TowerKills
        this.inhibitorKills = data.InhibitorKills;
        this.baronKills = data.BaronKills;
        this.dragonKills = data.DragonKills;
        this.riftHeraldKills = data.RiftHeraldKills;
        this.totalKills = this.getTotalKills(players,data.TeamId);
        this.totalGolds = this.getTotalGolds(players,data.TeamId);
        this.totalAssists = this.getTotalAssists(players,data.TeamId);
        this.totalDamageDealt = this.getTotalDamageDealt(players,data.TeamId);
        this.totalDeaths = this.getTotalDeaths(players,data.TeamId);
        this.players = [];
    }

    private getTotalGolds(players: any[], teamId: number) {
        debugger;
        let totalGolds = 0;
        let startIndex = teamId == 100 ? 0 : players.length / 2;
        let endIndex = teamId == 100 ? (players.length / 2) - 1: players.length - 1;
        for (let x = startIndex; x <= endIndex; x++){
            totalGolds += players[x].Stats.GoldEarned;
        }
        return parseFloat((totalGolds / 1000).toFixed(2));
    }

    private getTotalKills(players: any[], teamId: number) {
        let totalKills = 0;
        let startIndex = teamId == 100 ? 0 : players.length / 2;
        let endIndex = teamId == 100 ? (players.length / 2) - 1: players.length - 1;
        for (let x = startIndex; x <= endIndex; x++){
            totalKills += players[x].Stats.Kills;
        }
        return totalKills;
    }

    private getTotalDeaths(players: any[], teamId: number) {
        let totalDeaths = 0;
        let startIndex = teamId == 100 ? 0 : players.length / 2;
        let endIndex = teamId == 100 ? (players.length / 2) - 1: players.length - 1;
        for (let x = startIndex; x <= endIndex; x++){
            totalDeaths += players[x].Stats.Deaths;
        }
        return totalDeaths;
    }

    private getTotalAssists(players: any[], teamId: number) {
        let totalAssists = 0;
        let startIndex = teamId == 100 ? 0 : players.length / 2;
        let endIndex = teamId == 100 ? (players.length / 2) - 1: players.length - 1;
        for (let x = startIndex; x <= endIndex; x++){
            totalAssists += players[x].Stats.Assists;
        }
        return totalAssists;
    }

    private getTotalDamageDealt(players: any[], teamId: number) {
        let totalDamageDealt = 0;
        let startIndex = teamId == 100 ? 0 : players.length / 2;
        let endIndex = teamId == 100 ? (players.length / 2) - 1: players.length - 1;
        for (let x = startIndex; x <= endIndex; x++){
            totalDamageDealt += players[x].Stats.TotalDamageDealt;
        }
        return totalDamageDealt;
    }
}

export class Player{
    summonerName: string;
    champion: Champion;
    spells: Spells;
    items: Items;
    states: States;
}


class Champion{
    championId: number;
    championName: string;
    championImage: string;
}

class Spells{
    spell1Id: number;
    spell1Name: string;
    spell2Id: number;
    spell2Name: string;
}

class Items{
    item0Id: number;
    item0Name: string;
    item1Id: number;
    item1Name: string;
    item2Id: number;
    item2Name: string;
    item3Id: number;
    item3Name: string;
    item4Id: number;
    item4Name: string;
    item5Id: number;
    item5Name: string;
    item6Id: number;
    item6Name: string;
}

class States{
    kills: number;
    deaths: number;
    assists: number;
    totalDamageDealt: number;
    wardsPlaced: number;
    wardsKilled: number;

}