import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  BaseUrl = environment.baseuri;
  constructor(private http: HttpClient) { }
getAllActivity(){
  return this.http.get(this.BaseUrl+"/activity/findall")
}
}
