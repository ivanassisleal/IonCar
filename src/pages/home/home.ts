import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import {CarroPage} from '../carro/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros;
  
  private _http: Http;
  private _loadingCtrl: LoadingController;
  private _alertCtrl: AlertController;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public http: Http) {
    this._loadingCtrl = loadingCtrl;
    this._alertCtrl = alertCtrl;
    this._http = http;
  }

  ngOnInit() {

    let loading = this._loadingCtrl.create({
      content: "Buscando novos carros. Aguarde ..."
    });

    loading.present();

    this._http
      .get('https://aluracar.herokuapp.com')
      .map(res => res.json())
      .toPromise()
      .then(carros => {
        this.carros = carros;
        loading.dismiss();
      })
      .catch(err => {
        loading.dismiss();
        this._alertCtrl.create({
          title: 'Falha na conexão',
          message: 'Ocorreu um erro ao realizar a requisição.',
          buttons: ['Ok']
        }).present();
      });
  }

  seleciona(carro) {
    this.navCtrl.push(CarroPage, { carroSelecionado: carro });
  }
}
