import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private data:User = undefined;

  setDataU(data:User){
      this.data = data;
  }

  getDataU():User{
      return this.data;
  }

  constructor() { }
}
