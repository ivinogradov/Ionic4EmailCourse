import { TestBed, inject } from '@angular/core/testing';

import { NotesService } from './notes.service';
import { IonicStorageModule } from '@ionic/storage';

describe('NotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService],
      imports: [ IonicStorageModule.forRoot() ]
    });
  });

  it('should be created', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));
});
