import { FormGroup } from '@angular/forms';

export class LoginModel {
    email: string;
    password: string;
    remenberMe?: boolean = false;
  
  static getErrorMessage(field,type){
    switch (field) {
      case 'email':
        if(type == "required"){
          return "Email is required."
        } else if(type == "email"){
          return "Email format is incorrect."
        }
        break;
        case 'password':
          if(type == "required"){
            return "Password is required"
          } else if (type == "minlength") {
            return "Password must has 8 characters and include 1 digit"
          }
          break;
      default:
        if(type == "mismatch"){
          return "Password must be the same as repeat password."
        } 
        break;
    }
  }
  }
  
  export class RegisterModel {
    email: string;
    password: string;
    confirmPassword: string;
    gameId:string;

    static passwordMatchValidator(g: FormGroup) {
      if (g.get('password') && g.get('confirmPassword')) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
      }
      return null;
    }

    static getErrorMessage(field,type){
      switch (field) {
        case 'email':
          if(type == "required"){
            return "Email is required."
          } else if(type == "email"){
            return "Email format is incorrect."
          }
          break;
          case 'password':
            if(type == "required"){
              return "Password is required"
            } else if(type == "mismatch"){
              return "Password are not the same."
            } else if (type == "minlength") {
              return "Password must has 8 characters and include 1 digit"
            }
            break;
          case 'confirmPassword':
            if(type == "required"){
              return "Repeat Password is required."
            } else if(type == "mismatch"){
              return "Password are not the same."
            }
          break;
          case 'gameId':
            if(type == "required"){
              return "Username is required."
            } else if (type == "minlength") {
              return "Username must more than 3 characters"
            } else if (type == "maxlength") {
              return "Username must less than 17 characters"
            }
            break;
        default:
          if(type == "mismatch"){
            return "Password must be the same as repeat password."
          } 
          break;
      }
    }
  }
  
  export class TokenModel {
    token: string;
    expiration: Date;
    user: MyFullDetail;
  }
  
  export class MyFullDetailExtend{
    twitchId?: string;
    twitterId?: string;
    instagramId?: string;
    isTwitchLive?: boolean;
    profileImage?: string;
    phone?: string;
    name?: string;
    email?: string;
    position?: string;
    gameId?:string;
    static getErrorMessage(field,type){
      switch (field) {
        case 'phone':
          if(type == "pattern"){
            return "Mobile Number can only be digits"
          } else if (type == "minlength") {
            return "Mobile number must be 10 digits (e.g 0430281525"
          } else if (type == "maxlength") {
            return "Mobile number must be 10 digits (e.g 0430281525"
          }
          break;
        case 'gameId':
            if(type == "required"){
              return "Username is required."
            } else if (type == "minlength") {
              return "Username must more than 3 characters"
            } else if (type == "maxlength") {
              return "Username must less than 17 characters"
            }
          break;
        case 'twitterId':
          if (type == "maxlength") {
              return "Your twitter username must less than 30 characters"
            }
          break;
        case 'instagramId':
          if (type == "maxlength") {
              return "Your Instagram username must less than 30 characters"
            }
          break;
        case 'twitchId':
          if (type == "maxlength") {
              return "Your Twitch username must less than 30 characters"
            }
            break;
        default:
          break;
      }
    }
}
  
  export class MyFullDetail extends MyFullDetailExtend{
   
    isVerified:boolean;
    id:number;
    team: TeamViewModel;
    litCoins: number;
}

  
export class AddResultModel{
  name: string;
  file: any;
  readonly: any;

  static getErrorMessage(field,type){
    switch (field) {
      case 'name':
        if(type == "required"){
          return "Team Name is required."
        } else if(type == "maxlength"){
          return "Team Name must less than 16 characters."
        } else if(type == "pattern"){
          return "Team Name must only contain english letter and space."
        }
        break;
      case 'file':
          if(type == "required"){
            return "Match screenshot is required"
          } 
        break;
      case 'replay':
          if(type == "required"){
            return "Match replay is required"
          } 
          break;
      default:
        break;
    }
  }
}

export class AddTeamModel{
  name: string;
  file: any;

  static getErrorMessage(field,type){
    switch (field) {
      case 'name':
        if(type == "required"){
          return "Team Name is required."
        } else if(type == "maxlength"){
          return "Team Name must less than 30 characters."
        } else if (type == "pattern") {
          return "Team Name only allow english letter and space and digits."
        }
        break;
      default:
        break;
    }
  }
}

  export class TeamViewModel{
   id:number;
   name:string;
   iconUrl:string;
   isVerified:boolean;
   totalScore:number;
   winrate:number;
   loses:number;
   wins:number;
   members:TeamMemberViewModel[] = []
  }

  export class TeamMemberViewModel extends MyFullDetailExtend{
    id:number;
    gameId:string;
    position:string;
    acceptedDate:Date;
    isLeader:boolean;
  }
  
export class TeamMemberUIModel extends TeamMemberViewModel{
  open: boolean = false;
}
  

  export class PlayerUpdateModel{
    gameId:string;
    phone:string;
    name:string;
    position: string;
    
    static getErrorMessage(field,type){
      switch (field) {
        case 'name':
          if (type == "pattern") {
            return "Name only allow english letter and space."
          }
          break;
        case 'phone':
          if (type == "pattern") {
            return "Phone only allow digits."
          }
          break;
        case 'gameId':
          if (type == "required") {
            return "Summoner ID is required."
          } else if (type == "minlength") {
            return "Summoner ID must more than 3 characters"
          } else if (type == "maxlength") {
            return "Summoner ID must less than 17 characters"
          }
          break;
        
        default:
          break;
      }
    }
  }

  export class MemberRequestCreateModel{
    gameId:string;
    teamId:number;
  }

  export class MemberRequestViewModel{
    team:TeamViewModel;
    teamId:number;
    playerId:number;
    id:number;
  }

  export class MatchViewModel{
    date:Date;
    winnerId:number;
    loserId:number;
    screenShotUrl:string;
    recordUrl:string;
    invalid:boolean;
    matchId:number;
    loser:TeamViewModel;
    winner:TeamViewModel;
    clips: MatchClipModel[];
    matchCode: string;
}
  
export class MatchClipModel{
    index?: number;
    videoUrl:string;
    matchId:number;
    clipId: number;
    likes: MatchClipInteract[];
  }

  export class MatchClipRequest{
    startDate:Date;
    endDate:Date;
  }
  
  export class MatchClipInteract{
    clipId: number;
    playerId: number;
    isLiked: boolean;
    id: number;
}
  
export class MatchCodeResponse{
  date:Date;
  requestId: number;
  matchId: number;
  riotTournamentCode: string;
  matchIndex: number;
  startTime: Date;
  riotMatchId: number;
}

export class PlayerGameAccount{
  gameStaticId: number;
  gameUniqueId: string;
  gameUniqueIntId: number;
  GameUniqueName: string;
  CreatedAt: Date;
  UpdateAt: Date;
  UpdateBy: number;
  PlayId: number;
  GameAccountId: number;
  Position: number;
  IsDelinked: boolean;
  MyDescription: string;
  IsVerified: boolean;
}