import { Routes } from '@angular/router';
import { GuidesShellComponent } from './guides-shell/guides-shell.component';
import { GuideIntroductionComponent } from './pages/guide-introduction/guide-introduction.component';
import { GuideProjectsComponent } from './pages/guide-projects/guide-projects.component';
import { GuidePythonVersionComponent } from './pages/guide-python-version/guide-python-version.component';
import { GuidePackageComponent } from './pages/guide-package/guide-package.component';
import { GuideScriptsComponent } from './pages/guide-scripts/guide-scripts.component';
import { GuideToolsComponent } from './pages/guide-tools/guide-tools.component';
import { GuidePipInterfaceComponent } from './pages/guide-pip-interface/guide-pip-interface.component';
import { GuideUtilityComponent } from './pages/guide-utility/guide-utility.component';

export const GUIDES_ROUTES: Routes = [
  {
    path: '',
    component: GuidesShellComponent,
    children: [
      { path: '', redirectTo: 'first-step', pathMatch: 'full' },
      { path: 'first-step', component: GuideIntroductionComponent },
      { path: 'projects', component: GuideProjectsComponent },
      { path: 'python-version', component: GuidePythonVersionComponent },
      { path: 'package', component: GuidePackageComponent },
      { path: 'scripts', component: GuideScriptsComponent },
      { path: 'tools', component: GuideToolsComponent },
      { path: 'pip-interface', component: GuidePipInterfaceComponent },
      { path: 'utility', component: GuideUtilityComponent },
      { path: '**', redirectTo: 'first-step' }
    ]
  }
];
