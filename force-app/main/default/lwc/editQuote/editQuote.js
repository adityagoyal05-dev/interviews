/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api , wire} from "lwc";
import  getQuote from '@salesforce/apex/QuoteController.getQuote';
import  updateQuote from '@salesforce/apex/QuoteController.updateQuote';

export default class EditQuote extends LightningElement {
  @api recordId;
  quoteData = [];


  @wire(getQuote, {recordDataId : '$recordId'})
  getQuoteData(result) {
      debugger;
      if (result.error) {
          this.errorMessage = JSON.stringify(error);
      } else if (result.data !== undefined) {
               this.quoteData = result.data;
      }
  };  

  saveUpdatedQuote(){
    debugger;
    if(updateQuote.length > 0){
        updateQuote({dataJSON: JSON.stringify(this.quoteData)})
        .then(data=>{
            if(data){
                this.showMessage('Record(s) are saved succesfully!', 'Success', 'success', 'dismissable');
            }else{
                this.showMessage('Record(s) are not saved!', 'Error', 'error', 'dismissable');
            }
        }).catch(error=>{
            this.showMessage('System Error: '+JSON.stringify(error.body.message), 'Error', 'error', 'dismissable');
        })

    }
}


  renderedCallback() {}
}
