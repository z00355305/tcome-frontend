import {Component, OnInit, OnChanges} from '@angular/core'
import {Locker} from 'angular2-locker'

import {StaticService} from '../lib/service/static'
import {MenuService} from './menu.service'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [StaticService, MenuService]
})
export class MenuComponent implements OnInit {

    constructor (private menuService: MenuService, private locker: Locker){
    }

    public user: any

    logout (){
        this.menuService.logout()
            .subscribe(
                res =>{
                    this.locker.clear()
                    this.user = {}
                },
                error =>{
                    if (error.status == 401){
                        this.locker.clear()
                        this.user = {}
                    }
                }
            )
    }

    ngOnInit (){
        this.user = this.locker.get('user')
    }
    ngOnChanges (){
        console.log(333);
    }

}
