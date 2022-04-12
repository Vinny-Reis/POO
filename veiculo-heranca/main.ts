import  { Ford }  from  "./ford";
import { Ferrari }  from "./ferrari";
import { Veiculo } from "./veiculo"

let  ford : Veiculo  =  new  Ford ( "Ford" ,  "FordGT" ,  "Carro", "Manual 5V", "6.997 CC V8");
let  ferrari : Veiculo  =  new  Ferrari ( "Ferrari", "330 P3", "Carro", "ZF5", "3967.44 CC V12");


console.log('=============================');
console.log(ford.status());
console.log('=============================');
console.log('=============================');
console.log(ferrari.status());
console.log('=============================');