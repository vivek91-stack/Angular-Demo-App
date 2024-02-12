import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  serverElements : any;
  newServerName = '';
  newServerContent = '';
  @Output('svCreated') serverCreated = new EventEmitter<{type: string,serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{type: string,serverName: string, serverContent: string}>();
  
  @ViewChild('serverContentInput') serverContentInput: ElementRef | undefined;
  onAddServer(nameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    console.log('serverContentInput::',this.serverContentInput?.nativeElement);
    
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit(
      {
        serverName: nameInput.value,
        serverContent: serverContentInput.value,
        type: 'server',
      }
    )
  }

  onAddBlueprint(nameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.blueprintCreated.emit(
      {
        serverName: nameInput.value,
        serverContent: serverContentInput.value,
        type: 'blueprint',
      }
    )
  }
}
