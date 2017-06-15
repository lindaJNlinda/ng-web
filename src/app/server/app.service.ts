import {Injectable, Inject} from '@angular/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AppService {
  private headers;
    constructor(@Inject(Http) private http : Http) {
      let head = new Headers();
      head.append('Content-Type', 'application/x-www-form-urlencoded');
      this.headers={ headers: head};
    }
    public getUsers(user,page) {

        let page1=page?page:1
        let username='123132343243';
        var body = "userID=" + user.member.userID+"&page="+page1;
        console.log(body);
        return this.http.post("http://testys.cn/api/user/getusers", body,this.headers);
    }

    public login(user){
      console.log(user);

        let username='123132343243';
        var body = "mobile=" + user.mobile+"&code="+user.code+"&source=3";
      console.log("body::::"+body);
        return this.http.post("http://testys.cn/api/account/verify/login", body,this.headers);
    }
    public code(mobile){

        var body = "mobile=" + mobile;
        return this.http.post("http://testys.cn/api/account/login/code",body,this.headers);
    }
}
