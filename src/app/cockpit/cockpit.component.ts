import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../interfaces';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{severName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{bluePrintName: string, bluePrintContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({severName: this.newServerName, serverContent: this.newServerContent})
  }

  onAddBlueprint() {
   this.bluePrintCreated.emit({bluePrintName: this.newServerName, bluePrintContent: this.newServerContent})
  }

}
