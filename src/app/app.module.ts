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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SharedModule } from "./modules/shared.module";
import { LoginComponent } from './routes/login-register/login/login.component';
import { RegisterComponent } from './routes/login-register/register/register.component';
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
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
