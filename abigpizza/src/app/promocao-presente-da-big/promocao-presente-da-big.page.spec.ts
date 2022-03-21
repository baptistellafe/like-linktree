import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromocaoPresenteDaBigPage } from './promocao-presente-da-big.page';

describe('PromocaoPresenteDaBigPage', () => {
  let component: PromocaoPresenteDaBigPage;
  let fixture: ComponentFixture<PromocaoPresenteDaBigPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocaoPresenteDaBigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromocaoPresenteDaBigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
