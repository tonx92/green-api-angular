import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GreenApiService {

  private apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) { }

  getSettings(idInstance:string, apiTokenInstance:string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
  }
  
  getStateInstance(idInstance:string, apiTokenInstance:string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
  }

  sendMessage(idInstance:string, apiTokenInstance:string, chatId:string, message:string): Observable<string> {
    let params = {
      chatId: chatId,
      message: message
    }
    return this.httpClient.post<string>(`${this.apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, params)
  }

  sendFileByUrl(idInstance:string, apiTokenInstance:string, chatId:string, fileUrl:string): Observable<string> {
    let params = {
      chatId: chatId,
      urlFile: fileUrl,
      fileName: fileUrl.split('/').pop()
    }
    return this.httpClient.post<string>(`${this.apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, params)
  }
}
