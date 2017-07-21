import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'page-home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: './home.html'
})
export class HomePage {
  id: number;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openEntity(){
    this.id = Math.floor((Math.random() * 1000) + 1);
    this.navCtrl.push('page-entity', { id: this.id});
  }

}
