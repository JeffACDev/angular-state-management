import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showMore: boolean = false;
  showMoreBtnTxt: string = 'Show more..';

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.showMoreBtnTxt = this.showMore ? 'Show less..' : 'Show more..';
  }
}
