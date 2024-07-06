import { Component, HostListener  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  targetUserIdShared: string = '';
  scrollPosition : string = '';

  constructor(private router: Router) { }

  onSetTargetUserId(id: string) {
    this.targetUserIdShared = id;
    this.scrollPosition = "bottom";
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any): void {
    const element = event.target;

    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    if (scrollTop === 0) {
      this.scrollPosition= 'top';
    } else if (scrollTop + clientHeight >= scrollHeight) {
      this.scrollPosition= 'bottom';
    } else {
      this.scrollPosition= 'middle';
    }
  }

  exit() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
