import {
  Component,
  Inject,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollTopComponent {
  @HostListener('window:scroll') onScroll(): void {
    if (window.scrollY >= 70) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && document.body.scrollTop < 70) {
      this.windowScrolled = false;
    }
  }
  public windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
