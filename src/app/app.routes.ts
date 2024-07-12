import { Routes } from '@angular/router';
import { MainFunctionButtonsComponent } from './main-function-buttons/main-function-buttons.component';
import { MoveReqComponent } from './move-req/move-req.component';
import { FixDictComponent } from './fix-dict/fix-dict.component';
import { FixEquipsComponent } from './fix-equips/fix-equips.component';
import { FixReqComponent } from './fix-req/fix-req.component';
import { FixUserComponent } from './fix-user/fix-user.component';
import { GetIDsComponent } from './get-ids/get-ids.component';

export const routes: Routes = [
  { path: '', component: MainFunctionButtonsComponent },
  { path: 'moveReq', component: MoveReqComponent },
  { path: 'fixDict', component: FixDictComponent },
  { path: 'fixEquips', component: FixEquipsComponent },
  { path: 'fixReq', component: FixReqComponent },
  { path: 'fixUser', component: FixUserComponent },
  { path: 'getIDs', component: GetIDsComponent },
];
