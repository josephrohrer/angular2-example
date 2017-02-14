import {Component} from "@angular/core";

@Component({
	selector: 'angular-setup',
	templateUrl: './templates/angular-setup.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}