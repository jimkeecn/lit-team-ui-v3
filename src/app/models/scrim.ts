export class ScrimUpdateModel{
    minRankId: number;
    maxRankId: number;
    date: Date;
    gameDescription: string;
    gameFormatId: number;
    dateUtc: string;

    static getErrorMessage(field,type){
        switch (field) {
          case 'minRankId':
            if(type == "required"){
              return "Min Rank is required."
            } 
            break;
            case 'maxRankId':
              if(type == "required"){
                return "Max Rank is required"
              } 
              break;
            case 'date':
              if(type == "required"){
                return "Start Time is required."
              } 
            break;
            case 'gameDescription':
              if(type == "required"){
                return "Description is required."
              } else if (type == "maxlength") {
                return "Description must less than 100 characters"
              }
                break;
            case 'gameFormatId':
              if(type == "required"){
                return "Game Format is required."
              } 
            break;
          default:
            break;
        }
      }
}

export class ScrimViewModel{
  id: number;
  minRankId: number;
  minRank: string;
  maxRankId: number;
  maxRank: string;
  date: Date;
  gameDescription: string;
  gameFormatId: number;
  gameFormat: string;
  gameTypeId: number;
  gameType: string;
  gameMapId: number;
  gameMap: string;
  gameStaticId: number;
  gameStatic: string;
  ownerClanId: number;
  ownerClan: string;
  ownerClanImg: string;
  challengerClanId: number;
  challengerClan: string;
  challengerClanImg: string;
  challengers: ScrimChallenger[]
}

export class ScrimChallenger{
  registrationId: number;
  clanId: number;
  clanName: string;
  clanImg: string;
  date: Date;
}