import { RecentSearches } from './../models/recentSearches';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutDialogComponent } from '../about-dialog/about-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  constructor(private router: Router, public dialog:MatDialog) { }
  title='WeatherForecast About'
  value: string;
  ls: string;
  public rs: RecentSearches;

  ngOnInit() {
    const ls = window.localStorage.getItem('RecentSearches');
    if (ls != null) {
      const parsedJson = JSON.parse(ls);
      const item: RecentSearches = parsedJson as RecentSearches;

      this.rs = item;
    }
  }

  public submit() {
    if (this.value != null) {
      this.addCityToRecentSearches(this.value);
      this.router.navigate(['/result', this.value]);
    }
  }

  public addCityToRecentSearches(city: string) {
    const ls = window.localStorage.getItem('RecentSearches');

    if (ls != null) {
      const parsedJson = JSON.parse(ls);
      const item: RecentSearches = parsedJson as RecentSearches;
      if (item.cities.length === 3) {
        item.cities.pop();
        item.cities.unshift(city);
      } else {
        item.cities.unshift(city);
      }
      const toLocalStorage = JSON.stringify(item);
      window.localStorage.setItem('RecentSearches', toLocalStorage);
    } else {
      const item = {} as RecentSearches;
      item.cities = [];
      item.cities.unshift(city);
      const toLocalStorage = JSON.stringify(item);
      window.localStorage.setItem('RecentSearches', toLocalStorage);
    }
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'WeatherForecast About'
    };

    const dialogRef = this.dialog.open(aboutDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed dialog')
    });
  }


}

