import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
darkTheme = true;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;

    if (this.darkTheme) {
      // Aplicar tema escuro
      document.body.classList.add('dark-theme');
    } else {
      // Aplicar tema claro
      document.body.classList.remove('dark-theme');
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
