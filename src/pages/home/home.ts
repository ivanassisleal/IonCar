import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(
    public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _http: Http) {

    let loading = _loadingCtrl.create({
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
      }, err => {
        loading.dismiss();
        _alertCtrl.create({
          title: 'Falha na conexão',
          message: 'Ocorreu um erro ao realizar a requisição.',
          buttons: ['Ok']
        }).present();
      });
  }
}
