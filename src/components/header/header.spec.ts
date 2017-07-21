import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { HeaderComponent } from './header';

let fixture: ComponentFixture<HeaderComponent> = null;
let instance: any = null;

describe('Pages: Header', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([HeaderComponent]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the header component', async(() => {
    expect(instance).toBeTruthy();
  }));

});