import { Component, OnInit } from '@angular/core';

import { NotesService } from '../services/notes.service';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private notesService: NotesService,
    private alertCtrl: AlertController,
    private navCtrl: NavController) {

  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.notesService.load();
  }

  addNote() {
    this.alertCtrl.create({
      header: 'New Note',
      message: 'What should the title of this note be?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            const id = this.notesService.createNote(data.title);
            this.navCtrl.navigateForward(`/notes/${id}`);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }
}
