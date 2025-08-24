import {Component, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './nav.html',
  standalone: true,
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly activeNav = signal('upper-body');

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        filter(e => e.url.slice(1).length !== 0),
        tap((e: NavigationEnd) => {
          this.activeNav.update(() => e.url.slice(1))
        }),
        takeUntilDestroyed()
      ).subscribe();
  }
}
