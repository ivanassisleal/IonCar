import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'carro.html'
})
export class CarroPage {

    public carro;

    constructor(public navParams: NavParams) {
        this.carro = navParams.get('carroSelecionado');
    }
}