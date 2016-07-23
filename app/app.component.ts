import {Component} from '@angular/core';

@Component({
     selector: 'app',
     template:`
     <h1>{{greeting}}</h1>
     `,
     styles:[`
        h1 {
            color:red;
        }
     `]
})
export class AppComponent {
    greeting:string="hello world";
}