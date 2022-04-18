import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { UserloginComponent } from './userlogin.component';


describe('UserloginComponent', () => {
  let component: UserloginComponent;
  let fixture: ComponentFixture<UserloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginComponent ],
      imports:[HttpClientModule,AppRoutingModule]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
