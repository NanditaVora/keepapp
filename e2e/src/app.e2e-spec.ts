import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Keep App as the Page Header text', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Keep App');
  });

  it('should display error message when login fails',()=>{
    browser.get('login');
    const inputElements = element.all(by.css('input'))
    inputElements.get(0).sendKeys('admins');
    inputElements.get(1).sendKeys('passsword')

    const button  = element(by.css('button'));
    button.click();
    const errorElement = element(by.css('.errorMessage'))
    expect(errorElement.getText()).toContain('Unauthorized');
    browser.sleep(1500);
  })

  
  it('should navigate to home page when login succeeds',()=>{
    browser.get('login');
    const inputElements = element.all(by.css('input'))
    inputElements.get(0).sendKeys('admin');
    inputElements.get(1).sendKeys('password')

    const button  = element(by.css('button'));
    button.click();
    expect(browser.getCurrentUrl()).toContain('home')
    browser.sleep(1500);
  })

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
