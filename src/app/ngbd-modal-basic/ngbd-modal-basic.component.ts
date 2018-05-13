//Import core
//Import ng-bootstrap dependencies
import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {NgbModal, NgbModalOptions, NgbActiveModal,  ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Component, Input, OnInit, ApplicationRef, ChangeDetectorRef} from '@angular/core';
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
    <ng-template #elseBlockB><p *ngIf="isVolsPools; else elseBlockC">
    <table class="table">
    <td>FailureType</td><td>Description</td><td>DiskPool</td><td>Required \n Reserved \n Drive \n Count</td><td>Current \n Reserved \n Drive \n Count</td><td>UsedCapacity</td><td>FreeCapacity</td>
    <tr *ngFor="let data of otherModalData; let i = index">
    <td>{{otherModalData[i].failureType}}</td>
    <td>{{otherModalData[i].description}}</td>
    <td>{{otherModalData[i].DiskPool}}</td>
    <td>{{otherModalData[i].RequiredReservedDriveCount}}</td>
    <td>{{otherModalData[i].CurrentReservedDriveCount}}</td>
    <td>{{otherModalData[i].UsedCapacity}}</td>
    <td>{{otherModalData[i].FreeCapacity}}</td>
    </tr>
    </table>
    </ng-template>
    <ng-template #elseBlockC><p #inputTraget >{{message}}</p> </ng-template>   
    </div>
    <div class="modal-footer">
      <button mat-raised-button color="primary" (click)="activeModal.close(true)">Ok</button>
    </div>
  `,
  styleUrls: ['./ngbd-modal-basic.component.css'] //all of this code is actually the html file, but angular allow to write it here instead of a seperate file
})
export class NgbdModalBasicComponent implements OnInit{
  @Input() title;
  @Input() message;
  isFailedDrives:boolean=false;
  isVolsPools:boolean=false;
  bugreportscreen:boolean=false;
  failedDrivesInfo:JSON;
  otherModalData:JSON;
  constructor(public activeModal: NgbActiveModal, public changeRef: ChangeDetectorRef) {
    console.log("DialogComponent construct");
  }
   
  ngOnInit() {//initialize bools
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
   
  confirm(callerTitle,callerMessage) {//the opening modal function
    
    const modalRef = this.modalService.open(NgbdModalBasicComponent,{size: 'lg'});
    if(callerTitle=="Failed Drives")//determine header for modal
    {
      callerMessage=JSON.parse(callerMessage);
      modalRef.componentInstance.failedDrivesInfo=callerMessage;
    }
    if(callerTitle=="Vols&Pools")
    {
      callerMessage=JSON.parse(callerMessage);
      modalRef.componentInstance.otherModalData=callerMessage;
      modalRef.componentInstance.title = callerTitle;
      // modalRef.componentInstance.message = callerMessage.split("\n");
      // modalRef.componentInstance.changeRef.markForCheck();
      // return modalRef.result;
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