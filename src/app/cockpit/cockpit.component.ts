import {Component,EventEmitter,OnInit,Output} from "@angular/core";


@Component({
  selector:'app-cockpit',
  templateUrl:'cockpit.component.html',
  styleUrls:['cockpit.component.css']
})

export class CockpitCcomponent implements OnInit{
  // to bind the mothed to nested component or child component.
  // serverCreated from app.component.html
  // blueprintCreated from app.component.html
  // we bind property from outside by using the EventEmitter.
  // () to call the constructor on the EventEmitter.
  // passing data to output.
  //@Output("bpCreated") serverCreated=new EventEmitter<{serverName:string,
  //serverContent:string}>();
  //bpCreated, change the serverCreated to bpCreated in app.component.html file.
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated =new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName ='';
  newServerContent ='';
  constructor(){

  }

  ngOnInit(){

  }
  // onAddServer(){
  //   this.serverElements.push({
  //     type,
  //     name:this.newServerName,
  //     content: this.newServerContent
  //   })
  // }

  // onAddBlueprint(){
  //   this.serverElements.push({
  //     type:'Blueprint',
  //     name:this.newServerName,
  //     content: this.newServerContent
  //   })
  // }
  onAddServer(){
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent:this.newServerContent
    })
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent:this.newServerContent
    })
  }

}