import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Hide, Show } from 'src/app/state-ngxs/actions/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isShowMore$ = this.store.select((state) => state.home);

  constructor(private store: Store) {}

  showMore() {
    this.store.dispatch(new Show());
  }

  showLess() {
    this.store.dispatch(new Hide());
  }
}
