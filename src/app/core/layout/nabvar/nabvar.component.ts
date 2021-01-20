import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent implements OnInit {
  menuShow = false;

  constructor() { }
  public toggleNavbar(): void{
    this.menuShow = !this.menuShow;
  }
  ngOnInit(): void {
  }

}
