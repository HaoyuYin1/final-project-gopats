import { Injectable, } from '@angular/core';
import { Acc } from '../model/acc';

@Injectable()
export class SharingService {
    constructor() {}

    private user: any;
    private account = [];
    private currentAcc: any;

    save(user) {
        this.user = user;
    }

    fetch() {
        return this.user;
    }

    addAccount(a){
        let acc;
        if (this.account == undefined) acc = [];
        else acc = this.account
        acc.push(a);
        this.account = acc;
    }
    removeAccount(a){

        this.account.splice( this.account.indexOf(a), 1 );

        if (this.account.length==0){
            this.currentAcc = [];
        } else{
            this.currentAcc = this.account[this.account.length-1];
        }

    }

    saveAccount(acc){
        this.account = acc;
    }

    fetchAccount() {
        return this.account;
    }

    saveCurrentAcc(acc){
        this.currentAcc = acc;
    }

    fetchCurrentAcc() {
        return this.currentAcc;
    }


    logOut(){
        this.user = undefined;
        this.account = undefined;
    }
}
