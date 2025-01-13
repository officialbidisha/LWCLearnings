import { LightningElement, wire } from 'lwc';
import getHighReenueAccountRecords from '@salesforce/apex/AccountController.getHighRevenueAccountRecords'

export default class HighRevenenueAccount extends LightningElement {
    accountsDisplay = [];
    @wire(getHighReenueAccountRecords)
    getAccountsHandler(response){
        // format : {error: , data:...}
        const {data, error} = response;
        if(error){
            console.error(error);
            return;
        }
        if(data){
            this.accountsDisplay = data;
        }
    }
}