import { LightningElement } from 'lwc';

export default class ComponentLibraryExample extends LightningElement {
    clickedButtonLabel;
    handleClick(){
        console.log('Clicked');
        this.clickedButtonLabel = event.target.label;
        console.log(this.clickedButtonLabel);
    }
}