import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  movieTitle:string = "Prenotazione posti";
    screen: string = "Realizzato da";
    time: string = "Marco Sansilvestri"
    price:number;
    tick:number;
    conv:number;
    rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    rowsPalco: string[] = ['H', 'I', 'J', 'K'];
    colsPalco: number[] = [11, 12, 13, 14, 15, 16];

    reserved: string[] = ['A2', 'A3', 'F1', 'F2', 'F5', 'F6', 'F7', 'F8', 'I13', 'I14', 'K16'];
    selected: string[] = [];

    ticketPrice: number = 10;
    convFee: number = 5;
    totalPrice: number = 0;
    currency: string = "€";

    //riporta lo stato dei posti
    getStatus = function(seatPos: string) {
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
    }
    //cancella selezione
    clearSelected = function() {
        this.selected = [];
    }
     //prenota i posti
     bookSelected = function() {
        this.reserved = this.reserved+this.selected;
        this.selected = [];
    }
     
    //interazione con i posti
    seatClicked = function(seatPos: string) {
        var index = this.selected.indexOf(seatPos);
        
        if(index !== -1) {
            // rimuovi un posto selezionato ricliccandoci
            this.selected.splice(index, 1)
        } else {
            //permetti la selezione solo dei posti liberi
            if(this.reserved.indexOf(seatPos) === -1)
                this.selected.push(seatPos);
        }
    }
    //informazioni prenotazione
    showSelected = function() {
        if(this.selected.length > 0) {
            
            this.price=this.ticketPrice;
           this.tick=this.selected.length;
            this.conv=this.convFee;
        } else {
            alert("Nessun posto selezionato!");
        }
    }   
}
