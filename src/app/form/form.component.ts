import { Component } from '@angular/core';
import { Report } from '../report';
import { DataService } from '../data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor( private _dataService : DataService) { 
  }
  model = new Report('Arad','report',new Date);
  isSubmited=false;
  submitted = false;
  launchEasterEgg = false;

  onSubmit() { 
    if(this.model.description!="AradTheKing")
    {
      console.log(this.model)
      this.submitted = true; 
    }
    else
    {
      this.launchEasterEgg = true;
    }
  }
  get diagnostic() { 
    return JSON.stringify(this.model);
   }
  submited(){
    this.isSubmited=true;
    this._dataService.sendBugReport(this.model).subscribe(report=>{
      console.log("sent to server");
    })
  }
}
