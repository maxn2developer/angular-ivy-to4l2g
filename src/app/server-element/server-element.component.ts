import {Component, OnInit,Input} from "@angular/core";

@Component ({
  selector:'app-server-element',
  templateUrl:'./server-element.component.html',
  styleUrls:['./server-element.component.css']
})

export class ServerElementComponent implements OnInit {
  //srvElement is alias when we define it, no more binding with element name.

  @Input("srvElement") element: {type:string , name:string,content:string};
  constructor(){

  }
  ngOnInit(){

  }
}