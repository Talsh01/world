import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class ContinentPageGuard implements CanActivate {

    constructor(public router: Router){}

    canActivate(): boolean {
        if (!localStorage.getItem("continentName") || !localStorage.getItem("continentCode")) {
            this.router.navigate(["/"]);
        }

        return true;
    }
}