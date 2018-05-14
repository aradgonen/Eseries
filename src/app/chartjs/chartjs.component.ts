import { Component, OnInit,AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import 'chart.piecelabel.js';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { error } from 'util';
import { DialogService } from '../ngbd-modal-basic/ngbd-modal-basic.component';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit, AfterViewInit {
  @ViewChildren("chartCanvas") ChartCanvas: QueryList<any>;
  jsons: any;//data of all systems
  NumberOfSystems: Number;//variable to store number of connected systems
  charts = [];//will save all of the charts data to render them
  onlyChartData=[];//secondery array for the charts
  i=0;
  systemName=[];//array of systems names
  constructor( private _dataService : DataService, private dialogService : DialogService) { 
    this._dataService.getData().subscribe(data => {//subscribing to the data service function
      this.jsons = data
      this.NumberOfSystems = this.jsons.data[0][1].systems.length//get number of systems
      this.createChartsData();//call the function
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit()//function that called only after html render is complete
  {
    console.log(this.NumberOfSystems);
    this.ChartCanvas.changes.subscribe(c => {//subscribe to function that watch for changes of the canvas
       this.ChartCanvas.toArray().forEach((item) => {
          console.log(item+"-----"+this.i)
          this.createCharts(this.onlyChartData,item,this.i,this.dialogService,this.jsons)//build chart to each canvas
        })
        this.putDatainChart()//enter data 
      });
  }
  createChartsData()//initialize the charts array with basic chart data
  {
    console.log(this.NumberOfSystems);
    for(var i =0; i<this.NumberOfSystems;i++)
    {
    var pie ={ // the configuration of chart
      type: 'doughnut',
      data: {
        labels: ["Disks", "Mgmt", "Hardware", "FC", "Vols&Pools"],
        datasets: [
          {
            backgroundColor:["#008000","#008000","#008000","#008000","#008000"],
            data: [20,20,20,20,20]
          }
        ]
      },
      options: {
        pieceLabel: {
          render: 'label',
          showZero: true,
          fontSize: 12,
          fontColor: '#fff',
          fontStyle: 'normal',
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          position: 'default',
          overlap: true,
        },
        elements: {
          center: {
          text: 'Desktop',
          color: '#36A2EB', //Default black
          fontStyle: 'Helvetica', //Default Arial
          sidePadding: 15 //Default 20 (as a percentage)
        }
      },
        title: {
          display: true
        },
        animations: true,
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        }
      }
  };
  this.onlyChartData.push(pie);//store it
}
}

  createCharts(pieData,ctx,index,dialogService,jsons){//create them and assign to canvas 
      console.log(ctx.nativeElement.children[0].children[1].children[0]);
      var tempChart = new Chart(ctx.nativeElement.children[0].children[1].children[0],pieData[index]);
      document.getElementById(ctx.nativeElement.children[0].children[1].children[0].id).onclick = function(evt){//get context of canvas
        var activePoints = tempChart.getElementAtEvent(evt);
        var firstPoint = activePoints[0];//set click listeners to charts and assign actions
        if(firstPoint!== undefined)
        {
          if (firstPoint._index==0) {//if #0 pressed
              console.log("Drives: System #"+firstPoint._chart.config.options.title.text);
              if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")//check if its red - yes, there is a fail 
              {
                var NumOfFailDrives;
                var errorID;
                var failedDrive =[];
                for(var x = 0;x<jsons.data[0][2].length;x++)
                {
                    if(jsons.data[0][2][x].failureType=="diskPoolDriveFailure")//check witch failure in order to show modal correctly
                    {
                      NumOfFailDrives = jsons.data[0][2][x].extraData.failedDrives.length;
                      console.log(NumOfFailDrives);
                      errorID=x;
                      for(var q = 0; q<NumOfFailDrives;q++)
                      {
                         failedDrive.push({tray:jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.locationPosition,slot:jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.slot,status:jsons.data[0][2][errorID].extraData.failedDrives[q].status,capacity:jsons.data[0][2][errorID].extraData.failedDrives[q].rawCapacity,interfaceType:jsons.data[0][2][errorID].extraData.failedDrives[q].interfaceType.driveType,id:jsons.data[0][2][errorID].extraData.failedDrives[q].productID});//the string to show
                        console.log(q);
                      }
                    }
                   
                }
                    dialogService.confirm("Failed Drives",JSON.stringify(failedDrive));//calling to function that open the modal
                
              }
          }
          if(firstPoint._index==1){//if #1 pressed
            console.log("Mgmt: System #"+firstPoint._chart.config.options.title.text);
            if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
              {
                dialogService.confirm("Mgmt","");//calling to function that open the modal
              }
          }
          if(firstPoint._index==2){
            console.log("Hardware: System #"+firstPoint._chart.config.options.title.text);
            if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")//if red
              {

                var outputMessage=[];
                for(var x = 0;x<jsons.data[0][2].length;x++)//determine what failure
                {
                  
                    if(jsons.data[0][2][x].failureType=="drawerDegraded")
                    {
                      outputMessage.push({failureType:"drawerDegraded"});
                    }
                    if(jsons.data[0][2][x].failureType=="usmUnreadableSectorsExist")
                    {
                      outputMessage.push({failureType:"usmUnreadableSectorsExist databasecount -> unreadablesectors"});

                    }
                   
                }
                dialogService.confirm("Hardware",outputMessage);//calling to function that open the modal
              }
          }
          if(firstPoint._index==3){//is #3 pressed
            console.log("FC: System #"+firstPoint._chart.config.options.title.text);
            if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
              {
                dialogService.confirm("FC","");
              }
          }
          if(firstPoint._index==4){
            console.log("VolsPols: System #"+firstPoint._chart.config.options.title.text);
            if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
              {
                var outputMessage=[];
                for(var x = 0;x<jsons.data[0][2].length;x++)//determine witch failure
                {
                  
                    if(jsons.data[0][2][x].failureType=="diskPoolReconstructionDriveCountBelowThreshold")
                    {
                      outputMessage.push({failureType:"diskPoolReconstructionDriveCountBelowThreshold",description:"Not Enough Spares",DiskPool:jsons.data[0][2][x].objectData.label,RequiredReservedDriveCount:jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCount,CurrentReservedDriveCount:jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCountCurrent});
                    }
                    if(jsons.data[0][2][x].failureType=="diskPoolCapacityDepleted")
                    {
                      outputMessage.push({failureType:"diskPoolCapacityDepleted",DiskPool:jsons.data[0][2][x].objectData.label,RequiredReservedDriveCount:jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCount,CurrentReservedDriveCount:jsons.data[0][2][x].objectData.volumeGroupData.diskPoolData.reconstructionReservedDriveCountCurrent,UsedCapacity:jsons.data[0][2][x].objectData.usedSpace,FreeCapacity:jsons.data[0][2][x].objectData.freeSpace});

                    }
                    if(jsons.data[0][2][x].failureType=="degradedVolume")
                    {
                      outputMessage.push({failureType:"degradedVolume",DiskPool:jsons.data[0][2][x].objectData.label+"-> Replace Disks Cyka Blyat"});
                    }
                   
                }
                dialogService.confirm("Vols&Pools",JSON.stringify(outputMessage));//calling to function that open the modal
              }
          }
      }
      }
      this.charts.push(tempChart);//store data
      this.i++;//store index
  }
  putDatainChart()//paint the charts if there is errors
  {
    if(this.jsons)
    {
      for(var k = 0; k<this.charts.length;k++)
      {
        if(this.jsons.data[0][1].systems[k].status!="optimal")//if there is failure in system the status will not be optimal
        {
          console.log(this.jsons.data[0][1].systems[k].status);
          for(var x = 0;x<this.jsons.data[0][2].length;x++)//determine with slice paint to red
          {
              if(this.jsons.data[0][2][x].failureType=="diskPoolDriveFailure")
              {
                  console.log(k+"-diskToRed");
                  this.charts[k].config.data.datasets[0].backgroundColor[0]="#ff0000";
                  this.charts[k].update();
              }
              if(this.jsons.data[0][2][x].failureType=="diskPoolReconstructionDriveCountBelowThreshold"||this.jsons.data[0][2][x].failureType=="diskPoolCapacityDepleted")
              {
                  console.log(k+"-volspolsToRed");
                  this.charts[k].config.data.datasets[0].backgroundColor[4]="#ff0000";
                  this.charts[k].update();
              }
              if(this.jsons.data[0][2][x].failureType=="drawerDegraded"||this.jsons.data[0][2][x].failureType=="usmUnreadableSectorsExist")
              {
                console.log(k+"-hardwareToRed");
                  this.charts[k].config.data.datasets[0].backgroundColor[2]="#ff0000";
                  this.charts[k].update();
              }
              
          }
        }
        this.systemName.push(this.jsons.data[0][1].systems[k].name);//store system names
      }
    }
    else
    {
      console.log("jsons is empty");
    }
  }
}