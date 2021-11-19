import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-zar-oyunu',
  templateUrl: './zar-oyunu.component.html',
  styleUrls: ['./zar-oyunu.component.scss']
})
export class ZarOyunuComponent implements OnInit {
  zar1: any;
  zar2: any ;
  sonucZ:  any=0;
  sonucR:  any=0;
  sonuc: any;
  denemeSayisi = 0;
  errorZar1Number = false
  errorZar2Number = false

  constructor(
    private helperSvc:HelperService
  ) {}

  ngOnInit() {
  }
  numberOnly(event:any) {
    return this.helperSvc.onlyNumber(event)
  }
  hesapla() {
    this.sonucZ=(this.zar1)+(this.zar2)

    var random1 = Math.floor(Math.random() * 6)+1;
    var random2 = Math.floor(Math.random() * 6)+1;
    this.sonucR=random1+random2

    this.sonuc = this.sonucZ == this.sonucR ? "Tebrikler Kazandınız!" : "Kaybettiniz..."
    console.log(this.sonucZ);
    console.log(this.sonucR);
    this.denemeSayisi++
    // !this.sonuc ? this.denemeSayisi : ;

  }
  onNumber(zar:string){
    if(zar == 'zar1' && (this.zar1>6 || this.zar1<1)){
      this.errorZar1Number = true
      this.zar1 = null
    }else{
      this.errorZar1Number = false
    }
    if(zar == 'zar2' && (this.zar2>6 || this.zar2<1)){
      this.errorZar2Number = true
      this.zar2 = null
    }else{
      this.errorZar2Number = false
    }
  }
}
