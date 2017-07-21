import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'page-entity',
  segment: 'entity/:id'
})
@Component({
  selector: 'page-entity',
  templateUrl: 'entity.html',
})
export class EntityPage {
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntityPage');
    this.text = `Hi I am entity with the id: ${this.navParams.get('id')}`
  }

}
