import { OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';

declare let setEvents: any;
declare let $: any;
import 'bootstrap';

export class ControllerBase implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(){

    }
    
    ngAfterContentInit() {
    }

    ngAfterViewInit() {
        
    }

    ngOnDestroy() {
    }

    getMessage(){
        
        let d = new Date();
        let hour = d.getHours();
        
        if(hour < 5) {
            return "Uma Ótima Madrugada";
        }
        
        if(hour < 8) {
            return "Uma Ótimo Dia";
        }
    
        
        if(hour < 12) {
            return "Uma Ótimo Dia";
        }
    
        if(hour < 18) {
            return "Uma Ótima Tarde";
        } else {
            return "Uma Ótima Noite";
        }
    }
}