import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleItemComponent } from "./articles/article-item/article-item.component";
import { ArticleDetailsComponent } from "./articles/article-details/article-details.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleItemComponent,
    ArticleDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CommonModule,
    // SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
