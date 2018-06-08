import {LocaisModule} from './locais.module';

describe('LocaisModule', () => {
  let locaisModule: LocaisModule;

  beforeEach(() => {
    locaisModule = new LocaisModule();
  });

  it('should create an instance', () => {
    expect(locaisModule).toBeTruthy();
  });
});
