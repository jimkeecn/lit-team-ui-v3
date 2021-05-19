export class ScrimUpdateModel{
    minRankId: number;
    maxRankId: number;
    date: Date;
    gameDescription: string;
    gameFormatId: number;

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