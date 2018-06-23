import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FrequencyService {

  public base_url: string = "http://"+window.location.hostname + ":" + 3000 + "/";
  constructor(private http: HttpClient) {

  }

  // function to get top N(umberOfWords) frequent words.

  getTopWordsFrequency(numberOfWords: number) {
   // console.log(this.base_url + "frequency/top/" + numberOfWords);
    return this.http.get(this.base_url + "frequency/top/" + numberOfWords);
  }

}
