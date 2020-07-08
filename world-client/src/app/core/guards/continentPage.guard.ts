import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class ContinentPageGuard implements CanActivate {

    constructor(public router: Router){}

    canActivate(): boolean {
        if (!localStorage.getItem("continentName")) {
            this.router.navigate(["/"]);
        }

        return true;
    }
}