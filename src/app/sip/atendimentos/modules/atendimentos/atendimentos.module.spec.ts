import {AtendimentosModule} from './atendimentos.module';

describe('AtendimentosModule', () => {
  let atendimentosModule: AtendimentosModule;

  beforeEach(() => {
    atendimentosModule = new AtendimentosModule();
  });

  it('should create an instance', () => {
    expect(atendimentosModule).toBeTruthy();
  });
});
