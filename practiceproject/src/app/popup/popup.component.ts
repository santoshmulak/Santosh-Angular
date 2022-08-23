import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  ApiData:any;
  dataList: any;
  cars$:any;
  carFlag=false
  carName = ['minicuper','ennova','i10','i20','breeza']
  cData: any;
  obs2: any;
  obs1: any;
  asynData: any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.obs2=new Observable ((obser)=>{
      setTimeout(() => {
        obser.next('in process')
      }, 3000);
    }).subscribe(data=>{
      console.log(data);
      
    })

  }
  getData(){
    this.dataList = this.dataService.getApiCall()
    .subscribe((data)=>{
    this.ApiData = data;
    console.log(data);   
  })
  //  this.dataService.getApiCall().toPromise().then(resp=>
  //   console.log(resp)
  //   )
  }
  getObervableData(){
    console.log('cars var before making it',this.cars$);
    return this.obs1= this.cars$=of(this.carName)
    console.log('cars var after making it',this.cars$);
  }
  getOberData(){
    this.getObervableData().subscribe((carData)=>{
      console.log(carData);
      this.carFlag=true;
      this.cData=carData;
      
    });

  }

  deleteRecord(id:any){
    this.dataService.deleteApiCall(id).subscribe(data=>{
      console.log(data);
      
    })
  }
  putRecord(id:any){
    let body = {adminFirstName:'jayraj'}
    this.dataService.putApiCall(id,body).subscribe(data=>{
      console.log(data);
    
  })
}
   ngOnDestroy(){
    console.log("calling destroy on unsubcribe");
    this.dataList.unsubscribe();
    // this.obs1.unsubcribe();
    this.obs2.unsubscribe();
   }

   getPromises(){
    let pen = new Promise((resolve,reject)=>{
      if(!true){
        resolve('got a product')
      }
      else reject('not got')
    })
    pen.then((msg)=>{
      console.log(msg);
      
    }).catch(res=>{
      console.log(res);
    })
    
   }
   async asyncAwait(){
    this.asynData=await this.dataService.getApiCall().toPromise()
    console.log(this.asynData);
    
   }
}
