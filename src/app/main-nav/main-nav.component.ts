import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private overlay: OverlayContainer) {}

  toggleControl = new FormControl(false);
  @HostBinding('style.class') className= '';
  darkClassName = 'theme-dark';
  lightClassName = 'theme-light';

  ngOnInit(){
    debugger;
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName || 'theme-dark': this.lightClassName || 'theme-light';
      if(darkMode){
        this.overlay.getContainerElement().classList.add(this.darkClassName);
      }
      else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }
    })
  }

}
