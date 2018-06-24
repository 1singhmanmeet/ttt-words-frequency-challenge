import { Component, OnInit } from '@angular/core';
import {FrequencyService } from '../frequency.service';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css']
})
export class FrequencyComponent implements OnInit {

  // number entered by user.
  numberOfWords:number=0;
  
  // Array to hold the response from backend.
  wordsArray=[];
  
  constructor(private service:FrequencyService) {

   }

  ngOnInit() {
    
  }

  // function to submit the request when user hit submit button.
  onSubmit(){
    
    if(this.numberOfWords<=0 || this.numberOfWords==undefined){
      alert("Invalid Input!!!: Please give a valid positive number.");
    }
    else if(this.numberOfWords!=0 && this.numberOfWords!= undefined){
      this.service.getTopWordsFrequency(this.numberOfWords)
      .subscribe(res=>{
        this.wordsArray=res['data'];
        if(this.wordsArray.length < this.numberOfWords){
          alert("Your entered value is greater than the total words in the file. So, all the words will be shown.");
        }
         
      });
    }
    
  }
}
