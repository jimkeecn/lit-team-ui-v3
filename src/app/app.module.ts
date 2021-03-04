import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { HeaderActionsComponent } from './header/header-actions/header-actions.component';
import { MenuPanelComponent } from './overlays/menu-panel/menu-panel.component';
import { SearchPanelComponent } from './overlays/search-panel/search-panel.component';
import { CartPanelComponent } from './overlays/cart-panel/cart-panel.component';
import { HomeComponent } from './routes/home/home.component';
import { UpcomingTournamentsComponent } from './routes/upcoming-tournaments/upcoming-tournaments.component';
import { ApplicationService } from './services/app/application.service';
import { TournamentOverviewComponent } from './routes/tournament-detail/tournament-overview/tournament-overview.component';
import { TournamentRulesComponent } from './routes/tournament-detail/tournament-rules/tournament-rules.component';
import { TournamentHeadingComponent } from './routes/tournament-detail/shared/tournament-heading/tournament-heading.component';
import { TournamentLinksComponent } from './routes/tournament-detail/shared/tournament-links/tournament-links.component';
import { TournamentContainerComponent } from './routes/tournament-detail/tournament-container/tournament-container.component';
import { TournamentBracketsComponent } from './routes/tournament-detail/tournament-brackets/tournament-brackets.component';
import { TournamentMatchCardComponent } from './routes/tournament-detail/shared/tournament-match-card/tournament-match-card.component';
import { TournamentTeamsComponent } from './routes/tournament-detail/tournament-teams/tournament-teams.component';
import { TournamentSingleTeamComponent } from './routes/tournament-detail/shared/tournament-single-team/tournament-single-team.component';
import { LoginRegisterComponent } from './routes/login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SharedModule } from "./modules/shared.module";
import { LoginComponent } from './routes/login-register/login/login.component';
import { RegisterComponent } from './routes/login-register/register/register.component';
import { TournamentCardComponent } from './routes/upcoming-tournaments/shared/tournament-card/tournament-card.component';
import { MatchContainerComponent } from './routes/match-detail/match-container/match-container.component';
import { MatchOverviewComponent } from './routes/match-detail/match-overview/match-overview.component';
import { MatchStatesComponent } from './routes/match-detail/match-states/match-states.component';
import { MatchPlayersComponent } from './routes/match-detail/match-players/match-players.component';
import { MatchSocialMediaComponent } from './routes/match-detail/match-social-media/match-social-media.component';
import { JwtInterceptor } from "@app-services/http/http.service";
import { TeamStandingsComponent } from './routes/teams/team-standings/team-standings.component';
import { NotificationPanelComponent } from './overlays/notification-panel/notification-panel.component';
import { TeamContainerComponent } from './routes/team-detail/team-container/team-container.component';
import { TeamOverviewComponent } from './routes/team-detail/team-overview/team-overview.component';
import { TeamStatesComponent } from './routes/team-detail/team-states/team-states.component';
import { TeamMembersComponent } from './routes/team-detail/team-members/team-members.component';
import { MobileComponent } from './overlays/menu-panel/mobile/mobile.component';
import { DesktopComponent } from './overlays/menu-panel/desktop/desktop.component';
import { AccountContainerComponent } from './routes/account/account-container/account-container.component';
import { AccountSettingComponent } from './routes/account/account-setting/account-setting.component';
import { AccountTeamComponent } from './routes/account/account-team/account-team.component';
import { AccountActionsComponent } from './routes/account/account-actions/account-actions.component';
import { ForgotPasswordComponent } from './routes/login-register/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from './routes/login-register/confirm-email/confirm-email.component';
import { ForgotPasswordRequestComponent } from './routes/login-register/forgot-password-request/forgot-password-request.component';
import { AccountDetailsComponent } from './routes/account/account-setting/account-details/account-details.component';
import { SocialMediaComponent } from './routes/account/account-setting/social-media/social-media.component';
import { TwitchComponent } from './routes/account/account-setting/twitch/twitch.component';
import { AccountGamesComponent } from './routes/account/account-games/account-games.component';
import { TournamentRegistrationComponent } from './routes/tournament-detail/shared/tournament-registration/tournament-registration.component';
import { ClanInviteNotificationComponent } from './overlays/notification-panel/clan-invite-notification/clan-invite-notification.component';
import { TournamentInviteNotificationComponent } from './overlays/notification-panel/tournament-invite-notification/tournament-invite-notification.component';
import { TournamentTeamDetailComponent } from './routes/tournament-detail/shared/tournament-team-detail/tournament-team-detail.component';
import { TournamentFreeAgentsComponent } from './routes/tournament-detail/tournament-free-agents/tournament-free-agents.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderLogoComponent,
    MainNavComponent,
    HeaderActionsComponent,
    MenuPanelComponent,
    SearchPanelComponent,
    CartPanelComponent,
    HomeComponent,
    UpcomingTournamentsComponent,
    TournamentOverviewComponent,
    TournamentRulesComponent,
    TournamentHeadingComponent,
    TournamentLinksComponent,
    TournamentContainerComponent,
    TournamentBracketsComponent,
    TournamentMatchCardComponent,
    TournamentTeamsComponent,
    TournamentSingleTeamComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent,
    TournamentCardComponent,
    MatchContainerComponent,
    MatchOverviewComponent,
    MatchStatesComponent,
    MatchPlayersComponent,
    MatchSocialMediaComponent,
    TeamStandingsComponent,
    NotificationPanelComponent,
    TeamContainerComponent,
    TeamOverviewComponent,
    TeamStatesComponent,
    TeamMembersComponent,
    MobileComponent,
    DesktopComponent,
    AccountContainerComponent,
    AccountSettingComponent,
    AccountTeamComponent,
    AccountActionsComponent,
    ForgotPasswordComponent,
    ConfirmEmailComponent,
    ForgotPasswordRequestComponent,
    AccountDetailsComponent,
    SocialMediaComponent,
    TwitchComponent,
    AccountGamesComponent,
    TournamentRegistrationComponent,
    ClanInviteNotificationComponent,
    TournamentInviteNotificationComponent,
    TournamentTeamDetailComponent,
    TournamentFreeAgentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageFullscreenViewModule
  ],
  providers: [ApplicationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
