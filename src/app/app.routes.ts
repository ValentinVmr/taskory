import { Routes } from '@angular/router';
import { JournalComponent } from './features/journal/journal.component';

export const routes: Routes = [
  { path: '', component: JournalComponent },
  { path: '**', redirectTo: '' },
];
