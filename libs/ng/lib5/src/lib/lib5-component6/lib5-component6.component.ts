
        import { Component, OnInit } from '@angular/core';
        import { SHARED_CONST } from '@happyorg/shared-utils';

        @Component({
          selector: 'happyorg-lib5-component6',
          templateUrl: './lib5-component6.component.html',
          styleUrls: ['./lib5-component6.component.css']
        })
        export class Lib5Component6Component implements OnInit {
          sharedConst = SHARED_CONST;
        
          constructor() { }
        
          ngOnInit() {
          }
        
        }        
        