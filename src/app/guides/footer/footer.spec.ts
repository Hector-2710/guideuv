import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the brand description', () => {
    const description = fixture.nativeElement.querySelector('.footer__description');
    expect(description).toBeTruthy();
    expect(description.textContent).toContain('GuideUV');
  });

  it('should render three navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('.footer__link');
    expect(links.length).toBe(3);
  });

  it('should render three social links', () => {
    const socialLinks = fixture.nativeElement.querySelectorAll('.footer__social-link');
    expect(socialLinks.length).toBe(3);
  });

  it('should have a mailto link with correct email', () => {
    const emailLink = fixture.nativeElement.querySelector('.footer__email');
    expect(emailLink.getAttribute('href')).toBe('mailto:hector@guideuv.com');
  });

  it('should display the current year in copyright', () => {
    const copyright = fixture.nativeElement.querySelector('.footer__copyright');
    const year = new Date().getFullYear().toString();
    expect(copyright.textContent).toContain(year);
  });
});