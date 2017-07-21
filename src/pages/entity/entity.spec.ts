import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { EntityPage } from './entity';

let fixture: ComponentFixture<EntityPage> = null;
let instance: any = null;

describe('Pages: Entity', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([EntityPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    console.log('compiled', compiled)
  })));

  it('should create the Entity ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));

});