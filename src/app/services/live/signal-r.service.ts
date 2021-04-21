import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";  // 
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection
  private baseUrl: string = '';

  buildConnection(   ) {
    this.http.get(this.baseUrl + "/LitTeamHub", { responseType: 'text' }).subscribe(res => {
      console.log("Activated Live API");
    })
  }

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:5001/LitTeamHub')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  startNotificationListening(userId){
    let url = userId + "-Token";
    this.hubConnection.on(url, (data) => {
      alert("receive notification");
      console.log("got it", data);
    });
  }

  constructor( private http: HttpClient,) {
    this.baseUrl = environment.liveUrl;
  }
}
