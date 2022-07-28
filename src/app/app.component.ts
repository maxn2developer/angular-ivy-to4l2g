import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  serverElements = [{type:'server',name:'Testserver',content:'Just a test'}];

  //this method called after the onAddServer and onAddBlueprint methods.
  //how bind with name and content which found in the cockpit.component.
  // serverData is a event data from app.component.html
  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'Server',
      //event bind to the serverElements.
      name:serverData.serverName,
      content: serverData.serverContent
    })
  }

  // onBlueprintAdded(blueprintData:{blueprintName:string,blueprintContent:string}){
  //   this.serverElements.push({
  //     type:'Blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //     check what will happen.
  //     name:blueprintData.blueprintName,
  //     content: blueprintData.blueprintContent
    
  //   })
  // }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'Blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

}