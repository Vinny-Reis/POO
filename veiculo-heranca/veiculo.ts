export class Veiculo {

    protected _modelo: string;
    protected _marca: string;
    protected _tipo: string;

    constructor(modelo: string, marca: string, tipo: string){

        this._marca = marca;
        this._modelo = modelo;
        this._tipo = tipo;
    }

    status(): string {
        return(

            "Veiculo:  \n" +
            "\nModelo: " +
            this._modelo +
            ("\nMarca: " + this._marca) +
            ("\nTipo: " + this._tipo)
        );
    }






}