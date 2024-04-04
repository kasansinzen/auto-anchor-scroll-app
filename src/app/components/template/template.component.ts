import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideMenuComponent } from '@app/components/template/side-menu/side-menu.component';
import { HeightSpyDirective } from '@app/core/directives/height-spy.directive';

@Component({
	selector: 'app-template',
	standalone: true,
	imports: [MatSidenavModule, SideMenuComponent, HeightSpyDirective],
	templateUrl: './template.component.html',
	styleUrl: './template.component.scss',
})
export class TemplateComponent {}
