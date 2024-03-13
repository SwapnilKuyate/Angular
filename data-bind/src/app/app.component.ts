import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{name}}</h1> <!--interpolation -->

              <button type="button" (click)="iAmGettingCalled()">CLick me</button>
              <p>{{msgFun}}</p> <!--event Binding-->

              <input [(ngModel)]= "name1" type="text" > 
                {{name1}} <!--2 way binding -->
              `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // title = 'data-bind';
  public name="Angular"
  public msgFun:string = "j"

  public name1:string=""

      iAmGettingCalled(){
        this.msgFun=`Hello i am TS function called by function "iAmGettingCalled()"`
      }


}
