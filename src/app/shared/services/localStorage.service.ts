import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  setKey(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {}
  }
  getKey(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      return null;
    }
  }
}
