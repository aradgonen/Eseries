//Import core
//Import ng-bootstrap dependencies
import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {NgbModal, NgbModalOptions, NgbActiveModal,  ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Component, Input, OnInit, ApplicationRef, ChangeDetectorRef} from '@angular/core';
import {ClipboardModule} from 'ngx-clipboard'
@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div *ngIf="isFailedDrives; else elseBlockA">
    <table class="table">
    <td>Tray</td><td>Slot</td><td>Status</td><td>Capacity</td><td>Interface Type</td><td>ID</td>
    <tr *ngFor="let Data of failedDrivesInfo; let i = index">
    <td>{{failedDrivesInfo[i].tray}}</td>
    <td>{{failedDrivesInfo[i].slot}}</td>
    <td>{{failedDrivesInfo[i].status}}</td>
    <td>{{failedDrivesInfo[i].capacity}}</td>
    <td>{{failedDrivesInfo[i].interfaceType}}</td>
    <td>{{failedDrivesInfo[i].id}}</td>
    </tr>
    </table>
    </div>
    <ng-template #elseBlockA><p *ngIf="bugreportscreen; else elseBlockB"><app-form></app-form></ng-template>
    <ng-template #elseBlockB><p *ngIf="isVolsPools; else elseBlockC"><p *ngFor="let data of message; let i = index">
    {{message[i]}}
    <br/>
  </p></ng-template>
    <ng-template #elseBlockC><p #inputTraget >{{message}}</p> </ng-template>   
    </div>
    <div class="modal-footer">
      <button mat-raised-button color="primary" (click)="activeModal.close(true)">Ok</button>
    </div>
  `
})
export class NgbdModalBasicComponent implements OnInit{
  @Input() title;
  @Input() message;
  isFailedDrives:boolean=false;
  isVolsPools:boolean=false;
  bugreportscreen:boolean=false;
  failedDrivesInfo:JSON;
  constructor(public activeModal: NgbActiveModal, public changeRef: ChangeDetectorRef) {
    console.log("DialogComponent construct");
  }
   
  ngOnInit() {
    console.log("DialogComponent init");
    if(this.title=="Failed Drives")
    {
      this.isFailedDrives=true;
      console.log("true");
    }
    if(this.title=="Vols&Pools")
    {
      this.isVolsPools=true;
      console.log("true");
    }
    if(this.title=="Enter Bug Details")
    {
      this.bugreportscreen=true;
      console.log("true");
    }
  }
}
@Injectable()
export class DialogService {  
  constructor(private modalService: NgbModal) {}
   
  confirm(callerTitle,callerMessage) {
    
    const modalRef = this.modalService.open(NgbdModalBasicComponent,{size: 'lg'});
    if(callerTitle=="Failed Drives")
    {
      callerMessage=JSON.parse(callerMessage);
      modalRef.componentInstance.failedDrivesInfo=callerMessage;
    }
    if(callerTitle=="Vols&Pools")
    {

      modalRef.componentInstance.title = callerTitle;
      modalRef.componentInstance.message = callerMessage.split("\n");
      modalRef.componentInstance.changeRef.markForCheck();
      return modalRef.result;
    }
    else
    {
      modalRef.componentInstance.title = callerTitle;
      modalRef.componentInstance.message = callerMessage;
      modalRef.componentInstance.changeRef.markForCheck();
      return modalRef.result;
    }

  }
}