import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , Nav} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
// import { TabsPage } from './../tabs/tabs';
// import { ClientesPage } from './../clientes/clientes';
// import { ArtigosPage } from './../artigos/artigos';

// import { MenuController } from 'ionic-angular'
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface PageInterface{
    title: string;
    pageName: string;
    tabComponent?: any;
    index?: number;
    icon: string;
 }

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Artigos', pageName: 'TabsPage', tabComponent: 'ArtigosPage', index: 0, icon: 'home' },
    { title: 'Clientes', pageName: 'TabsPage', tabComponent: 'ClientesPage', index: 1, icon: 'contacts' },
    { title: 'Venda', pageName: 'TabsPage', tabComponent: 'VendaPage', index: 1, icon: 'contacts' }
  ];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public apiProvider: ApiProvider) {
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
}
