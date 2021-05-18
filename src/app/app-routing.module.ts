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
import { TeamStandingsComponent } from './routes/teams/team-standings/team-standings.component';
import { TeamsResolverService } from "@app-services/resolver/teams-resolver.service";
import { TeamContainerComponent } from './routes/team-detail/team-container/team-container.component';
import { TeamOverviewComponent } from './routes/team-detail/team-overview/team-overview.component';
import { TeamDetailResolverService} from "@app-services/resolver/team-detail-resolver.service";
import { AccountContainerComponent } from './routes/account/account-container/account-container.component';
import { AccountSettingComponent } from './routes/account/account-setting/account-setting.component';
import { AccountTeamComponent } from './routes/account/account-team/account-team.component';
import { ConfirmEmailComponent } from './routes/login-register/confirm-email/confirm-email.component';
import { ForgotPasswordRequestComponent } from './routes/login-register/forgot-password-request/forgot-password-request.component';
import { ForgotPasswordComponent } from './routes/login-register/forgot-password/forgot-password.component';
import { AccountGamesComponent } from './routes/account/account-games/account-games.component';
import { TournamentFreeAgentsComponent } from './routes/tournament-detail/tournament-free-agents/tournament-free-agents.component';
import { EasterEventComponent } from './routes/easter-event/easter-event.component';
import { TournamentInviteComponent } from './routes/tournament-invite/tournament-invite.component';
import { AccountNotificationsComponent } from './routes/account/account-notifications/account-notifications.component';
import { ScrimDashboardComponent } from './routes/scrim/scrim-dashboard/scrim-dashboard.component';
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
            path: "agents",
            component:TournamentFreeAgentsComponent
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
  {
    path: "tournament-invite/:tournamentId/:token",
    component:TournamentInviteComponent
  },
  {
    path: "teams",
    component: TeamStandingsComponent,
    resolve: {
      detail: TeamsResolverService
    },
    
  },
  {
    path: "team-detail/:id",
    component: TeamContainerComponent,
        resolve: {
          detail: TeamDetailResolverService
    }
  },
  {
    path: "account",
    component:AccountContainerComponent,
    children: [
      {
        path: "setting",
        component: AccountSettingComponent,
      },
      {
        path: "games",
        component: AccountGamesComponent,
      },
      {
        path: "clan",
        component: AccountTeamComponent,
      },
      {
        path: "notification",
        component:AccountNotificationsComponent
      }
    ]
  },
  {
    path:"confirm-email/:token/:email",
    component:ConfirmEmailComponent
  },
  {
    path:"reset-password-request",
    component:ForgotPasswordRequestComponent
  },
  {
    path:"reset-password/:token/:email",
    component:ForgotPasswordComponent
  },
  {
    path: "easter-event",
    component:EasterEventComponent
  },
  {
    path: "scrims",
    component:ScrimDashboardComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
