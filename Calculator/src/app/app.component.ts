import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  
//function to display numbers and operators 
display(val: any): any {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    
    result.value += val;
    
    return val;
}

//function to solve and display the result
solve(): any {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    const x: string = result.value;
    const solvedcalculation: number = eval(x);
    result.value = solvedcalculation.toString();

    return solvedcalculation;
}

//Clears the display form Numbers and Strings
clearScreen(): any {

    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    result.value = '';
}


}
