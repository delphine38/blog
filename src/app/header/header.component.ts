import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// @Input() titre =  new MaladiesRares ("Je vous présente mon Blog Angular de quelques maladies rares ...");

  constructor() { }
// prenoms = [
//     'Bob',
//     'Jean',
//     'Marie'
//   ];
  ngOnInit(): void {
  }

}
