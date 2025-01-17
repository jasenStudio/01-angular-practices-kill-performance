import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSixComponent } from './example-six.component';

describe('ExampleSixComponent', () => {
  let component: ExampleSixComponent;
  let fixture: ComponentFixture<ExampleSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
