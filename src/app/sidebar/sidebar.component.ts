import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },{
        path: '/equipe',
        title: 'Equipe',
        type: 'sub',
        icontype: 'assignment',
        collapse: 'equipe',
        children: [
            {path: 'list-equipe', title: 'List Equipe', ab:'LE'},
            {path: 'form-equipe', title: 'Form Equipe', ab:'FE'},
            {path: 'cards-equipe', title: 'Cards Equipe', ab:'CE'}
        ]
    },
    {
        path: '/detail-equipe',
        title: 'DetailEquipe',
        type: 'sub',
        icontype: 'assignment',
        collapse: 'detail-equipe',
        children: [
            {path: 'list-detail-equipe', title: 'List Detail Equipe', ab:'LE'},
            {path: 'add-form', title: 'Form Detail Equipe', ab:'FE'},
        ]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

}
