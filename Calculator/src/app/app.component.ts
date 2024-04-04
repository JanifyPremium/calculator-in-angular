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
  
display(val: any): any {
    // Get the HTML input element with the id 'result'
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    
    // Append the value of 'val' to the current value of the 'value' property of the input element
    result.value += val;
    
    // Return the value of 'val'
    return val;
}

solve(): any {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    const x: string = result.value;
    const y: number = eval(x);
    result.value = y.toString();
    return y;
}

clearScreen(): any {

    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    result.value = '';
}


}
