export class Configuration {
  static URL_API = `https://jsonplaceholder.typicode.com/users`;
  static PORT = '8082';
  static URL_SIP_API = `http://localhost:${Configuration.PORT}/sip/api/`;
  static URLS_DESENVOLVIMENTO = {
    API: `${Configuration.URL_SIP_API}`
  };
  static URLS_SIP_DESENVOLVIMENTO = {
      solicitacoes: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}atendimentos/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}atendimentos/`
      },
      internos: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}atendimentos/internos/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}atendimentos/internos/search/`
      },
      externos: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}atendimentos/externos/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}atendimentos/externos/search/`
      },
      processos: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}processos/`,
        page: `${Configuration.URLS_DESENVOLVIMENTO.API}processos/page/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}processos/search/`
      },
      contratos: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}contratos/`,
        page: `${Configuration.URLS_DESENVOLVIMENTO.API}contratos/page/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}contratos/filter/`
      },
      equipamentos: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/search/`,
        inoperabilidade: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/inoperabilidade/`,
        modelo: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/modelo/`,
          page: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/modelo/page/`,
          search: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/modelo/search/`
        },
        tipo: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/tipo/`,
          page: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/tipo/page/`
        },
        movimentacao: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/movimentacao/`
        },
        suprimentos: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/suprimentos`,
          page: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/suprimentos/page/`,
          search: {
            count: `${Configuration.URLS_DESENVOLVIMENTO.API}equipamentos/suprimentos/search/?count=1`
          }
        }
      },
      faturas: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}faturas/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}faturas/search/`
      },
      fornecedores: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/`,
        page: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/page/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/search/`
      },
      garantia: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/garantia/`,
        page: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/garantia/page/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/garantia/search/`
      },
      rta: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/rta/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}fornecedores/rta/`
      },
      locais: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}locais/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}locais/search/`
      },
      unidades: {
        base: `${Configuration.URLS_DESENVOLVIMENTO.API}locais/unidades/page/`,
        search: `${Configuration.URLS_DESENVOLVIMENTO.API}locais/unidades/search/`
      },
      users: {
        usuarios: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}tst/users/`,
          page: `${Configuration.URLS_DESENVOLVIMENTO.API}tst/users/page/`
        },
        servidores: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}tst/users/servidores/`
        },
        ferias: {
          base: `${Configuration.URLS_DESENVOLVIMENTO.API}usuarios/ferias/`
        }
      }
    };
  private constructor() {
  }
}
