import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>test worked</h1>
              <input type='text'  value="seed" [id]='sdf' >
              `,

  styleUrl: './test.component.css'
})
export class TestComponent {

}
