import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { TournamentOverviewComponent } from './routes/tournament-detail/tournament-overview/tournament-overview.component';
import { UpcomingTournamentsComponent } from './routes/upcoming-tournaments/upcoming-tournaments.component';
import { TournamentRulesComponent } from './routes/tournament-detail/tournament-rules/tournament-rules.component';
import { TournamentContainerComponent } from './routes/tournament-detail/tournament-container/tournament-container.component';
import { TournamentBracketsComponent } from './routes/tournament-detail/tournament-brackets/tournament-brackets.component';
import { TournamentTeamsComponent } from './routes/tournament-detail/tournament-teams/tournament-teams.component';
import { LoginRegisterComponent } from './routes/login-register/login-register.component';
import { TournamentDetailResolverService } from '@app-services/resolver/tournament-detail-resolver.service';
import { MatchDetailResolverService } from "@app-services/resolver/match-detail-resolver.service";
import { MatchContainerComponent } from './routes/match-detail/match-container/match-container.component';
import { MatchOverviewComponent } from './routes/match-detail/match-overview/match-overview.component';
import { MatchPlayersComponent } from './routes/match-detail/match-players/match-players.component';
import { MatchStatesComponent } from './routes/match-detail/match-states/match-states.component';
import { MatchSocialMediaComponent } from './routes/match-detail/match-social-media/match-social-media.component';
const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path:"sign",
    component: LoginRegisterComponent,
  },
  {
    path:"upcoming-tournaments",
    component: UpcomingTournamentsComponent,
  },
  {
    path: "tournament-detail",
    children: [
      {
        path: ":id",
        component: TournamentContainerComponent,
        resolve: {
          detail: TournamentDetailResolverService
        },
        children: [
          {
            path: "overview",
            component:TournamentOverviewComponent
          },
          {
            path: "rules",
            component:TournamentRulesComponent
          },
          {
            path: "brackets",
            component:TournamentBracketsComponent
          },
          {
            path: "teams",
            component:TournamentTeamsComponent
          },
          {
            path: "bracket-detail",
            children: [
              {
                path: ":bracketId",
                component: MatchContainerComponent,
                resolve: {
                  detail: MatchDetailResolverService
                }
              }
            ]
          },
        ]
      }
    ]
  },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
