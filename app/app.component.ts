import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App {{text}}</h1>'
})
export class AppComponent {
    public text:string;
    constructor(){
        var i = 0;
        this.text = "some text....";
    }
}