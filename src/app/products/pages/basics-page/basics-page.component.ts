import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'citlalli';
  public nameUpper: string = 'CITLALLI';
  public fullName: string = 'ciTlALLi mARTiNeZ';

  public customDate: Date = new Date();
}
