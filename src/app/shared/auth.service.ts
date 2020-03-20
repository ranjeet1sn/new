import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Room } from '../owner/owner.model';
import { Detail } from '../buyer/buyer.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static token:string
readonly baseUrl="/api"
static data:Room
static id;
  constructor(private http:HttpClient) { }
  addUser(user:User){
    return this.http.post(this.baseUrl+'/insert',user)
  }
  loginUser(user:User){
    return this.http.post(this.baseUrl+'/authenticate',user)
  }
  setToken(token:string){
   localStorage.setItem('token',token)
  }
  getToken(){
   return localStorage.getItem('token')
  }
  chkToken(token:string){
    AuthService.token=token
  }
  returnToken(){
    return AuthService.token
  }
  deleteToken() {
    localStorage.removeItem('token')
  }
  insertValue(data:Room){
    return this.http.post(this.baseUrl+'/record',data)
  }
  getValue(){
    return this.http.get(this.baseUrl+'/getroom')
  }
  deleteValue(id){
    return this.http.delete(this.baseUrl+`/${id}`)
  }
  sendValue(data:Room,id:string){
   AuthService.data=data
   AuthService.id=id
  }
  getById(){
    return AuthService.id
  }
  returndata(){
    return AuthService.data
     }
     udpateRoom(user:Room,id:string){
      console.log(user,id)
      return this.http.put(this.baseUrl+`/${id}`,user)
    }
    helpFormInsert(data){
      console.log(data)
     return this.http.post(this.baseUrl+'/help',data)
    }
    getroomByLocation(data){
      console.log(data)
      return this.http.get(this.baseUrl+'/getbylocation'+`/${data}`)
    }
    userDetail(user:Detail){
      return this.http.post(this.baseUrl+'/newrecord',user)
    }
    getUserDetail(){
      return this.http.get(this.baseUrl+'/getrecord')
    }
}
