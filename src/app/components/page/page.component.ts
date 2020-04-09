import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() public isProgressBarVisible?: boolean = false;
  @Input() public progressBarMode?: 'buffer' | 'indeterminate' = 'indeterminate';

  public constructor() { }

  public ngOnInit(): void { }

}
