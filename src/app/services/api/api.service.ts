import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { MatchClipRequest, MatchViewModel, MemberRequestCreateModel, MemberRequestViewModel, MyFullDetail, PlayerUpdateModel, ClanViewModel } from '@app-models/user';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
    private route: Router,
    private app:ApplicationService
  ) {
    this.baseUrl = environment.url;
  }


  getMyDetail() : Observable<MyFullDetail>{
    const url = `${this.baseUrl}/user`;
    return this.http.get<MyFullDetail>(url).pipe(tap(x=>{
      //do something
    }));
  }

  updateMyDetail(data:PlayerUpdateModel):Observable<any>{
    const url = `${this.baseUrl}/player`;
    return this.http.post<any>(url,data).pipe(tap(x=>{
      //do something
    }));
  }

  createNewTeam(data:FormData):Observable<any>{
    const url = `${this.baseUrl}/team`;
    return this.http.put<any>(url,data).pipe(tap(x=>{
      //do something
    }));
  }

  getAllTeam():Observable<ClanViewModel[]>{
    const url = `${this.baseUrl}/teams`;
    return this.http.get<ClanViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getTop10Team():Observable<ClanViewModel[]>{
    const url = `${this.baseUrl}/teams/top10`;
    return this.http.get<ClanViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getTeamInfoById(id:number):Observable<ClanViewModel>{
    const url = `${this.baseUrl}/team/${id}`;
    return this.http.get<ClanViewModel>(url).pipe(tap(x=>{
      //do something
    }));
  }

  GetTeamByName(name: string): Observable<ClanViewModel[]>{
    const url = `${this.baseUrl}/team/search/${name}`;
    return this.http.get<ClanViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getTeamInfoByIdWithMatches(id:number):Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/team/${id}/matches`;
    return this.http.get<MatchViewModel[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  inviteMember(data:MemberRequestCreateModel):Observable<any>{
    const url = `${this.baseUrl}/MemberRequest`;
    return this.http.put<any>(url,data).pipe(tap(x=>{
      //do something
    }))
  }

  getAllInvitations():Observable<MemberRequestViewModel[]>{
    const url = `${this.baseUrl}/MemberRequest`;
    return this.http.get<any>(url).pipe(tap(x=>{
      this.app.invitations$.next(x);
    }))
  }

  removeApplication(id:number):Observable<any>{
    const url = `${this.baseUrl}/MemberRequest/${id}/remove`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
    }))
  }

  denialApplication(id:number):Observable<any>{
    const url = `${this.baseUrl}/MemberRequest/${id}/denial`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
    }))
  }

  acceptApplication(id:number):Observable<any>{
    const url = `${this.baseUrl}/MemberRequest/${id}/accept`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
    }))
  }

  removeMember(id: number): Observable<any>{
    const url = `${this.baseUrl}/member/${id}/remove`;
    return this.http.delete<any>(url).pipe(tap(x=>{
    }))
  }

  addNewMatchResult(data:FormData):Observable<any>{
    const url = `${this.baseUrl}/match`;
    return this.http.put<any>(url,data).pipe(tap(x=>{
    }))
  }

  updateMatchResult(data:FormData):Observable<any>{
    const url = `${this.baseUrl}/match/UpdateMatchResult`;
    return this.http.post<any>(url,data).pipe(tap(x=>{
    }))
  }

  getPendingMatchResult():Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/match/pending`;
    return this.http.get<MatchViewModel[]>(url).pipe(map(matches => 
      matches.sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime())))
  }

  getWeeklyMatchResult():Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/match/weekly`;
    return this.http.get<MatchViewModel[]>(url)
    .pipe(map(matches => 
      matches.sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime())))
  }

  removePendingMatchResult(id:number):Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/match/${id}/remove`;
    return this.http.post<MatchViewModel[]>(url,null).pipe(tap(x=>{
    }))
  }

  getHomeMatchesResult():Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/match`;
    return this.http.get<MatchViewModel[]>(url).pipe(map(matches => 
      matches.sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime())))
  }

  getAllPendingMatches():Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/admin/pendings`;
    return this.http.get<MatchViewModel[]>(url).pipe(map(matches => 
      matches.sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime())))
  }

  getAllApprovedMatches(request:MatchClipRequest):Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/admin/approved`;
    return this.http.post<MatchViewModel[]>(url,request).pipe(map(matches => 
      matches.sort((a, b) =>  new Date(b.date).getTime() - new Date(a.date).getTime())))
  }

  approvePendingMatches(id:number):Observable<number>{
    const url = `${this.baseUrl}/admin/${id}/approve`;
    return this.http.post<number>(url,null).pipe(tap(x=>{
      
    }))
  }

  rejectPendingMatches(id:number):Observable<number>{
    const url = `${this.baseUrl}/admin/${id}/reject`;
    return this.http.post<number>(url,null).pipe(tap(x=>{
      
    }))
  }

  uploadMatchClip(data:FormData):Observable<any>{
    const url = `${this.baseUrl}/admin/upload`;
    return this.http.post<any>(url,data).pipe(tap(x=>{
      
    }))
  }

  getMyLiketoClip(clipId:number):Observable<any>{
    const url = `${this.baseUrl}/clip/mylike/${clipId}`;
    return this.http.get<any>(url).pipe(tap(x=>{
      
    }))
  }

  likeVideoClip(clipId:number):Observable<any>{
    const url = `${this.baseUrl}/clip/like/${clipId}`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
      
    }))
  }

  unlikeVideoClip(clipId:number):Observable<any>{
    const url = `${this.baseUrl}/clip/unlike/${clipId}`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
      
    }))
  }

  
}
