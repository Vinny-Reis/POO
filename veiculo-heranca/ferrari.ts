import { Veiculo } from "./veiculo";

export class Ferrari extends Veiculo{
    
    private _cambio: string;
    private _potencia: string;

    constructor(marca: string, modelo: string, tipo: string, cambio: string, potencia: string){
       super(marca, modelo, tipo); 
       this._cambio = cambio;
       this._potencia = potencia;
    }

    status(): string {
        return(

            "Ferrari:  \n" +
            "\nModelo: " +
            this._modelo +
            ("\nMarca:  " + this._marca) +
            ("\nTipo:  " + this._tipo) +
            ("\nPotencia:  " + this._potencia) +
            ("\nCambio:  " + this._cambio)
        );
    }
}