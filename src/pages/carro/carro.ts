import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'carro.html'
})
export class CarroPage {

    public carro;
    public acessorios;
    private _precoTotal: number;

    constructor(public navParams: NavParams) {
        this.carro = navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;
        this.acessorios = [
            { nome: 'Freio ABS', preco: 800 },
            { nome: 'Ar-condicionado', preco: 1000 },
            { nome: 'MP3 Player', preco: 500 }
        ];
    }

    get precoTotal() {
        return this._precoTotal;
    }
}
