import {FornecedoresModule} from './fornecedores.module';

describe('FornecedoresModule', () => {
  let fornecedoresModule: FornecedoresModule;

  beforeEach(() => {
    fornecedoresModule = new FornecedoresModule();
  });

  it('should create an instance', () => {
    expect(fornecedoresModule).toBeTruthy();
  });
});
