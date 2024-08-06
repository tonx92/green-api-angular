import { Component, OnInit } from '@angular/core'
import { GreenApiService } from './shared/services/green-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  idInstance:string = ''
  apiTokenInstance:string = ''
  chatId:string = ''
  message:string = ''
  chatIdForFile:string = ''
  fileUrl:string = ''

  resultat:string = ''

  constructor(private greenApiService: GreenApiService){}

  ngOnInit(): void { }

  getSettings(){
    this.greenApiService.getSettings(this.idInstance, this.apiTokenInstance).subscribe(response => {
      this.resultat = JSON.stringify(response)
    }, err => {
      this.resultat = JSON.stringify(err)
    })
  }

  getStateInstance(){
    this.greenApiService.getStateInstance(this.idInstance, this.apiTokenInstance).subscribe(response => {
      this.resultat = JSON.stringify(response)
    }, err => {
      this.resultat = JSON.stringify(err)
    })
  }
  
  sendMessage(){
    this.greenApiService.sendMessage(this.idInstance, this.apiTokenInstance, this.chatId, this.message).subscribe(response => {
      this.resultat = JSON.stringify(response)
    }, err => {
      this.resultat = JSON.stringify(err)
    })
  }

  sendFileByUrl(){
    this.greenApiService.sendFileByUrl(this.idInstance, this.apiTokenInstance, this.chatId, this.fileUrl).subscribe(response => {
      this.resultat = JSON.stringify(response)
    }, err => {
      this.resultat = JSON.stringify(err)
    })
  }
}
