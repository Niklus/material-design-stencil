import { Component, Prop,  Element} from '@stencil/core';
import { MDCTemporaryDrawer } from '@material/drawer';
// import { MDCToolbar } from '@material/toolbar';

@Component({
  tag: 'app-nav',
  styleUrl:'app-nav.scss' 
})

export class AppNav {

  @Element() element: HTMLElement;

  @Prop() list:Array<string> = ['Home','About','Contact'];

  appDrawer: {open: boolean};
  
  componentDidLoad(){
    
    // This styles need to be added dynamically since <a> tag is hidden in stencil-rout-link
    const links:any = this.element.querySelectorAll('#link a')
    links.forEach( link => link.classList.add("mdc-list-item"));
    
    // Initialise Temporary Drawer
    let appNav = this.element.querySelector('.mdc-temporary-drawer');
    this.appDrawer = new MDCTemporaryDrawer(appNav); 

    let menu = this.element.querySelector('.menu')
    menu.addEventListener('click', () => this.toggleDrawer(true));
  }

  toggleDrawer(bool){
    this.appDrawer.open = bool;
  }

  render() {
    
    const listItems:object = this.list.map((item: string) => {
      return (
        <stencil-route-link  
          id="link"
          router="#router" 
          url={`/${ item == 'Home' ? '' : item.toLowerCase()}`} 
          onClick={() => this.toggleDrawer(false)}>
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true"> {item.toLowerCase()}</i>{item}
        </stencil-route-link>
      );
    });

    return (
      <div id="app-nav">
        
        <header class="mdc-toolbar">
          <div class="mdc-toolbar__row">
            <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
              <button class="menu material-icons mdc-toolbar__icon--menu">menu</button>
              <span class="mdc-toolbar__title">MY APP</span>
            </section>
          </div>
        </header>

        <aside class="mdc-temporary-drawer">
          <nav class="mdc-temporary-drawer__drawer">
            
            <header class="mdc-temporary-drawer__header">
              <div class="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                Header here
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

