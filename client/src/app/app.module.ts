import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightService } from './shared/services/highlight.service';

@NgModule({
  // 利用するコンポーネントを登録
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [HighlightService],
  bootstrap: [AppComponent],
})
export class AppModule { }
