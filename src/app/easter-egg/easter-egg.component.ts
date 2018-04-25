import { Component, OnInit ,AfterViewInit} from '@angular/core';
@Component({
  selector: 'easter-egg',
  templateUrl: './easter-egg.component.html',
  styleUrls: ['./easter-egg.component.css']
})
export class EasterEggComponent implements OnInit,AfterViewInit {
  constructor() { }
  py:any=10;
  px:any=10;
   tc:any=20;
   gs:any=20;
   ay:any=15;
   ax:any=15;
   yv:any=0;
   xv:any=0;
   trail:any=[];
   tail:any = 5;
   canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  ngAfterViewInit(){

  }
  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('gc');
    this.ctx = this.canvas.getContext('2d');
    document.addEventListener("keydown",this.keyPush);
    setInterval(this.gameloop,1000/15);
  }
  gameloop() {
    requestAnimationFrame(this.gameloop);
    this.px+=this.xv;
    this.py+=this.yv;
    if(this.px<0) {
        this.px= this.tc-1;
    }
    if(this.px>this.tc-1) {
      this.px= 0;
    }
    if(this.py<0) {
      this.py= this.tc-1;
    }
    if(this.py>this.tc-1) {
      this.py= 0;
    }
    this.ctx.fillStyle="black";
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
 
    this.ctx.fillStyle="lime";
    for(var i=0;i<this.trail.length;i++) {
      this.ctx.fillRect(this.trail[i].x*this.gs,this.trail[i].y*this.gs,this.gs-2,this.gs-2);
        if(this.trail[i].x==this.px && this.trail[i].y==this.py) {
          this.tail = 5;
        }
    }
    this.trail.push({x:this.px,y:this.py});
    while(this.trail.length>this.tail) {
      this.trail.shift();
    }
 
    if(this.ax==this.px && this.ay==this.py) {
      this.tail++;
      this.ax=Math.floor(Math.random()*this.tc);
      this.ay=Math.floor(Math.random()*this.tc);
    }
    this.ctx.fillStyle="red";
    this.ctx.fillRect(this.ax*this.gs,this.ay*this.gs,this.gs-2,this.gs-2);
}
 keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
        this.xv=-1;this.yv=0;
            break;
        case 38:
        this.xv=0;this.yv=-1;
            break;
        case 39:
        this.xv=1;this.yv=0;
            break;
        case 40:
        this.xv=0;this.yv=1;
            break;
    }
}
}