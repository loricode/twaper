import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { NavbarComponent } from './navbar/navbar.component';
import { BrandAreaComponent } from './brand-area/brand-area.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageComponent } from './language/language.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SmallPackagesComponent } from './small-packages/small-packages.component';
import { MicroPackagesComponent } from './micro-packages/micro-packages.component';
import { GigaPackagesComponent } from './giga-packages/giga-packages.component';
import { VipPackagesComponent } from './vip-packages/vip-packages.component';

import { CoreModule } from '../core/core.module';
import { XlPackageComponent } from './xl-package/xl-package.component';
import { SmPackagesComponent } from './sm-packages/sm-packages.component';

@NgModule({
  declarations: [
      BrandAreaComponent,
      FooterComponent,
      NavbarComponent,
      HeaderComponent,
      LanguageComponent,
      ContentComponent,
      SmallPackagesComponent,
      MicroPackagesComponent,
      GigaPackagesComponent,
      VipPackagesComponent,
      XlPackageComponent,
      SmPackagesComponent
      
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule,
    CoreModule,
  ],
  exports:[
    NavbarComponent,
    BrandAreaComponent,
    FooterComponent,
    HeaderComponent,
    LanguageComponent,
    ContentComponent,
    SmallPackagesComponent,
    MicroPackagesComponent,
    GigaPackagesComponent,
    VipPackagesComponent,
    XlPackageComponent,
    SmPackagesComponent
  ]
})
export class SharedModule { }
