import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

export type Classification = {
  label: string,
  routerLink?: any,
  icon?: string, children?: Classification[]
};

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  classifications: Classification[] = [
    { label: 'Dashboard', routerLink: ['/'], icon: 'home' },
    {
      label: 'Data', children: [{ label: 'Data Entry', routerLink: ['/dashboard/report'] }, { label: 'PID Vs RR No' }]
    },
    // {
    //   label: 'Static Schema Plot', children: [
    //     {
    //       label: 'Static Schema', children: [
    //         { label: 'Plan Schema' },
    //         { label: 'Isometric Schema' },
    //         { label: 'Section Schema' }]
    //     },
    //     {
    //       label: 'Reports', children: [
    //         { label: 'Operation &Maintenance BWSSB' },
    //         { label: 'Operation &Maintenance ConsumerReport' },
    //         { label: 'Complaints & Rectification' },
    //         { label: 'Hydraulics Water Supply Company' },
    //         { label: 'Hydraulics ConsumerReport', icon: 'history', routerLink: ['/dashboard/report'] }]
    //     },
    //     { label: 'Charts' }]
    // },
    // {
    //   label: 'Schema Dynamic Plot', icon: 'fa-search', children: [
    //     { label: 'Live Panel' },
    //     {
    //       label: 'Live Shema', icon: 'fa-search', children: [
    //         { label: 'Plan Schema' },
    //         { label: 'Isometric Schema' },
    //         { label: 'Section Schema' }]
    //     },
    //     {
    //       label: 'Reports', icon: 'fa-search', children: [
    //         { label: 'Operation &Maintenance BWSSB' },
    //         { label: 'Operation &Maintenance ConsumerReport' },
    //         { label: 'Complaints & Rectification' },
    //         { label: 'TMVP' },
    //         { label: 'Hydraulics Water Supply Company' },
    //         { label: 'Hydraulics ConsumerReport', routerLink: ['/live-consumer-report'] }]
    //     },
    //     { label: 'Charts' }]
    // }
  ];


  treeControl = new NestedTreeControl<Classification>(node => observableOf(node.children));
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );



  constructor(private breakpointObserver: BreakpointObserver) { }

}
