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
  jsons: any;
  userinfo: any;
  NumberOfSystems: Number;
  charts = [];
  onlyChartData=[];
  i=0;
  constructor( private _dataService : DataService, private dialogService : DialogService) { 
    this._dataService.getData().subscribe(data => {
      this.jsons = data
      this.NumberOfSystems = this.jsons.data[0][1].systems.length
      this.createChartsData();
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit()
  {
    console.log(this.NumberOfSystems);
    this.ChartCanvas.changes.subscribe(c => {
       this.ChartCanvas.toArray().forEach((item) => {
          console.log(item+"-----"+this.i)
          this.createCharts(this.onlyChartData,item,this.i,this.dialogService,this.jsons)
        })
        this.putDatainChart()
      });
  }
  createChartsData()
  {
    console.log(this.NumberOfSystems);
    for(var i =0; i<this.NumberOfSystems;i++)
    {
    var pie ={
      type: 'doughnut',
      data: {
        labels: ["Disks", "Mgmt", "Hardware", "FC", "Vols&Pols"],
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
  this.onlyChartData.push(pie);
}
}

  createCharts(pieData,ctx,index,dialogService,jsons){
      console.log(ctx.nativeElement.children[0].children[1].children[0]);
      var tempChart = new Chart(ctx.nativeElement.children[0].children[1].children[0],pieData[index]);
      document.getElementById(ctx.nativeElement.children[0].children[1].children[0].id).onclick = function(evt){
        var activePoints = tempChart.getElementAtEvent(evt);
        var firstPoint = activePoints[0];
        if(firstPoint!== undefined)
        {
          if (firstPoint._index==0) {
              console.log("Drives: System #"+firstPoint._chart.config.options.title.text);
              if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
              {
                var NumOfFailDrives;
                var errorID;
                var failedDrive =[];
                for(var x = 0;x<jsons.data[0][2].length;x++)
                {
                    if(jsons.data[0][2][x].failureType=="diskPoolDriveFailure")
                    {
                      NumOfFailDrives = jsons.data[0][2][x].extraData.failedDrives.length;
                      console.log(NumOfFailDrives);
                      errorID=x;
                      for(var q = 0; q<NumOfFailDrives;q++)
                      {
                         failedDrive.push({tray:jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.locationPosition,slot:jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.slot,status:jsons.data[0][2][errorID].extraData.failedDrives[q].status,capacity:jsons.data[0][2][errorID].extraData.failedDrives[q].rawCapacity,interfaceType:jsons.data[0][2][errorID].extraData.failedDrives[q].interfaceType.driveType,id:jsons.data[0][2][errorID].extraData.failedDrives[q].productID});
                        console.log(q);
                      }
                    }
                   
                }
                    dialogService.confirm("Failed Drives",JSON.stringify(failedDrive));
                
              }
          }
          if(firstPoint._index==1){
            console.log("Mgmt: System #"+firstPoint._chart.config.options.title.text);
            if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
              {
                dialogService.confirm("Mgmt","");
                
              }
          }
          if(firstPoint._index==2){
            console.log("Hardware: System #"+firstPoint._chart.config.options.title.text);
            if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
              {
                dialogService.confirm("Hardware","");
              }
          }
          if(firstPoint._index==3){
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
                dialogService.confirm("Vols&Pols",JSON.stringify(jsons.data[0][2][0].failureType));
              }
          }
      }
      }
      this.charts.push(tempChart);
      this.i++;
  }
  putDatainChart()
  {
    if(this.jsons)
    {
      for(var k = 0; k<this.charts.length;k++)
      {
        if(this.jsons.data[0][1].systems[k].status!="optimal")
        {
          console.log(this.jsons.data[0][1].systems[k].status);
          for(var x = 0;x<this.jsons.data[0][2].length;x++)
          {
              if(this.jsons.data[0][2][x].failureType=="diskPoolDriveFailure")
              {
                  console.log(k+"-diskToRed");
                  this.charts[k].config.data.datasets[0].backgroundColor[0]="#ff0000";
                  this.charts[k].update();
                  //this.DiskFailData(k);
              }
              if(this.jsons.data[0][2][x].failureType=="diskPoolReconstructionDriveCountBelowThreshold"||this.jsons.data[0][2][x].failureType=="diskPoolCapacityDepleted")
              {
                  console.log(k+"-volspolsToRed");
                  this.charts[k].config.data.datasets[0].backgroundColor[4]="#ff0000";
                  this.charts[k].update();
              }
          }
        }
        this.charts[k].options.title.text=this.jsons.data[0][1].systems[k].name;
        this.charts[k].update();
      }
    }
    else
    {
      console.log("jsons is empty");
    }
  }
//   clickedOnChart(event, array){
//     var firstPoint = array[0];
//     if(firstPoint!== undefined)
//     {
//       if (firstPoint._index==0) {
//           console.log("Drives: System #"+firstPoint._chart.config.options.title.text);
//           if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
//           {
//             console.log("Im Red");
//           }
//       }
//       if(firstPoint._index==1){
//         console.log("Mgmt: System #"+firstPoint._chart.config.options.title.text);
//         if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
//           {
//             console.log("Im Red");
            
//           }
//       }
//       if(firstPoint._index==2){
//         console.log("Hardware: System #"+firstPoint._chart.config.options.title.text);
//       }
//       if(firstPoint._index==3){
//         console.log("FC: System #"+firstPoint._chart.config.options.title.text);
//         if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
//           {
//             console.log("Im Red");
//           }
//       }
//       if(firstPoint._index==4){
//         console.log("VolsPols: System #"+firstPoint._chart.config.options.title.text);
//         if(firstPoint._chart.config.data.datasets[0].backgroundColor[firstPoint._index]=="#ff0000")
//           {
//             console.log("Im Red");
//           }
//       }
//   }
// }
// DiskFailData(systemID){
//   var NumOfFailDrives;
//   var errorID;
//   var failedDrive =[];
//   for(var x = 0;x<this.jsons.data[0][2].length;x++)
//   {
//       if(this.jsons.data[0][2][x].failureType=="diskPoolDriveFailure")
//       {
//         NumOfFailDrives = this.jsons.data[0][2][x].extraData.failedDrives.length;
//         errorID=x;
//       }
//   }
//   for(var q = 0; q<NumOfFailDrives;q++)
//   {
//     failedDrive.push({tray:this.jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.locationPosition,slot:this.jsons.data[0][2][errorID].extraData.failedDrives[q].physicalLocation.slot,status:this.jsons.data[0][2][errorID].extraData.failedDrives[q].status,capacity:this.jsons.data[0][2][errorID].extraData.failedDrives[q].rawCapacity,interfaceType:this.jsons.data[0][2][errorID].extraData.failedDrives[q].interfaceType.driveType,id:this.jsons.data[0][2][errorID].extraData.failedDrives[q].id});
//   }
//   //return failedDrive;
//   return failedDrive;
// }
}