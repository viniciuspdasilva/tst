import {ContratosModule} from './contratos.module';

describe('ContratosModule', () => {
  let contratosModule: ContratosModule;

  beforeEach(() => {
    contratosModule = new ContratosModule();
  });

  it('should create an instance', () => {
    expect(contratosModule).toBeTruthy();
  });
});
