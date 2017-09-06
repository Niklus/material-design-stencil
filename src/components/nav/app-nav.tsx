import { Component, Prop,  Element} from '@stencil/core';
import { MDCTemporaryDrawer } from '@material/drawer';
import { MDCSimpleMenu } from '@material/menu';

@Component({
  tag: 'app-nav',
  styleUrl:'app-nav.scss' 
})

export class AppNav {

  @Element() element: HTMLElement;

  @Prop() list:Array<string> = ['View1','View2','View3'];

  appDrawer: {open: boolean}; // placeholder object to avoid type errors in toggledrawer method.
  
  componentDidLoad(){
    
    // This styles need to be added dynamically since <a> tag is hidden in <stencil-rout-link/>
    const links:any = this.element.querySelectorAll('#link a')
    links.forEach( link => link.classList.add("mdc-list-item"));
    
    // Initialise Temporary Drawer
    const tempDrawer = this.element.querySelector('.mdc-temporary-drawer');
    this.appDrawer = new MDCTemporaryDrawer(tempDrawer); 
    
    // Add Event Listeners
    this.element.querySelector('.menu')
    .addEventListener('click', () => this.toggleDrawer(true));

    let simpleMenu = new MDCSimpleMenu(this.element.querySelector('.mdc-simple-menu'));
    this.element.querySelector('.simpleMenu')
    .addEventListener('click', () => simpleMenu.open = !simpleMenu.open);
  }

  toggleDrawer(bool){
    this.appDrawer.open = bool;
  }

  render() {
    
    /*Route Links */
    const listItems:object = this.list.map((item: string) => {
      return (
        <stencil-route-link  
          id="link"
          router="#router" 
          url={`/${ item == 'View1' ? '' : item.toLowerCase()}`} 
          onClick={() => this.toggleDrawer(false)}>
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">navigate_next</i>{item}
        </stencil-route-link>
      );
    });

    return (
      <div id="app-nav">
        
        <header class="mdc-toolbar">
          <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
              <button class="menu material-icons mdc-toolbar__icon--menu">menu</button>
              <span class="mdc-toolbar__title">App Shell</span>
            </section>
            <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
              
              <button class="material-icons mdc-toolbar__icon" aria-label="Download">file_download</button>
              <button class="material-icons mdc-toolbar__icon" aria-label="Print this page">print</button>
 
              <div class="mdc-menu-anchor">
                <button class="material-icons mdc-toolbar__icon simpleMenu" aria-label="Simple menu">more_vert</button>
                <div class="mdc-simple-menu">
                  <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                    <li class="mdc-list-item" role="menuitem" >Back</li>
                    <li class="mdc-list-item" role="menuitem" >Forward</li>
                    <li class="mdc-list-item" role="menuitem" >Reload</li>
                    <li class="mdc-list-divider" role="separator"></li>
                    <li class="mdc-list-item" role="menuitem">Save As...</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </header>

        <aside class="mdc-temporary-drawer">
          <nav class="mdc-temporary-drawer__drawer">
            
            <header class="mdc-temporary-drawer__header">
              <div class="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                Nav Header
              </div>
            </header>

            <nav class="mdc-temporary-drawer__content mdc-list-group">
              
              <div class="mdc-list">
               {listItems}
              </div>

              <hr class="mdc-list-divider"/>

              <div class="mdc-list">
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                </a>
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                </a>
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent Mail
                </a>
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
                </a>
              </div>

              <hr class="mdc-list-divider"/>

              <div class="mdc-list">
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All Mail
                </a>
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
                </a>
                <a class="mdc-list-item" href="#">
                  <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
                </a>
              </div>
            </nav>
          </nav>
        </aside>
      </div>
    );
  }
}

