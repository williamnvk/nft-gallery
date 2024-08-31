# Por que Express.js e não Nest.js ?

Levei em consideração a informação que eu tenho sobre o time atual, express.js por exemplo é uma _framework_
onde qualquer desenvolvedor, em qualquer nível, terá facilidade em desenvolver, dar manutenção e criar novas `features`.`

Nest.js é um pouco mais robusto em termos de desenvolvimento, pois engloba já no seu modo de desenvolver uma série de padrões e
arquiteturas impostas, há uma curva de aprendizado maior. Mas no firm, entrega um _endpoint_ igual o express.js!

Portanto meu modo de tornar o express.js mais robusto, porem menos complexo e mais acessível, é facilitar o entendimento
através da estrutura de arquivos, que nesse caso vou adotar uma padrão bem distribuído.

# Reservoir e OpenSea

Como o approach aqui é pegar as coleções de NFT, primariamente na _Reservoir_, então, imaginando e forcando um problema futuro, onde, por exemplo,
a _Reservoir_ para de funcionar, logo poderiamos rapidamente acioanr uma `FEATURE FLAG` para mudar o funcionamento para outro serviço, nesse caso a _OpenSea_.

Nesse caso, poderiamos de duas formas acionar um ou outro:

1. Em caso de demora ou falha na execução de um serviço, ex.: _Reservoir_, automaticamente o sistema pode acionar a _OpenSea_ no lugar.
2. Em caso de destinuidade do provider principal, acionar o outro. O mesmo poderia acontacer de 1:N _providers_.
3. (EXTRA) Teste A/B

Vale ver que eu criei um Type Genério para `Collection` onde tem alguns dados que são padrão. E dentro de cada serviço, há uma função que criei chamada `parser`, que
normaliza o retorno, pegando o dado de acordo com o especificado no _provider_. O resultado final é, que nossa _API_ retorn sempre dados padronizados, independente da fonte.

# logging e tratamento de erros

Não adicionei no projeto, mas para esse caso em especifico a opção que eu poderia dar para faturamente implementar seria `sentry`, `Grafana`, `datadog` ou `new relic` visto que esses eu já tive experiencias em projetos passados implementando e monitorando. Os beneficios aqui do monitoramento em produção em tempo real seriam:

Aqui seria um exemplo de implementação _(bem básico)_.

```javascript
Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  tracesSampleRate: 1.0, // Essa aqui seria uma informação primordial, pois iria cobrer 100% de todas as requisições.
});
```

# Uso de IA

- Usei principalmente para geraar a documentaçãodo swagger, que é uma escrita padronizada e tabulada.
- Sugestão de melhoria de código (não de todo o projeto) mas dos que pareciam maiores.
- Escrita dos types dos exemplos das requisições e retornos que eu peguei das documentações.
- Outras dúvidas menores.

# Entrega dos bonus

- [x] Implementar um mecanismo de cache para otimizar as consultas frequentes. *(Usei o Redis)* :heavy_check_mark:
- [ ] Adicionar testes unitários para componentes críticos. _Perdão Deus por isso_
- [x] Implementar um sistema básico de autenticação. *Bem básico mesmo, sem segunraça nenhuma hahahaha* :heavy_check_mark:
- [ ] Criar um dashboard no frontend para visualizar estatísticas agregadas das coleções. 
- [ ] Adicionar gráficos de desempenho na página de detalhes de cada coleção.
- [ ] Implementar logging e tratamento de erros mais robusto.
- [x] Otimizar o desempenho do frontend. :heavy_check_mark:
- [x] Adicionar funcionalidade de busca de coleções. :heavy_check_mark:
- [ ] Implementar paginação na lista de coleções.
- [x] Criar uma funcionalidade de exportação de dados (por exemplo, para CSV). :heavy_check_mark:

### Da entrega geral

- [x] Disponibilize o código-fonte em um repositório GitHub público. :heavy_check_mark:
- [x] Inclua um arquivo DECISIONS.md explicando as principais escolhas técnicas. :heavy_check_mark:
- [x] Se possível, forneça um link para uma versão demo da aplicação hospedada. [API](https://nft-gallery-c17cdb2a1bd7.herokuapp.com/api-docs) | [FRONT](https://nft-gallery-chi-tawny.vercel.app/) :heavy_check_mark:
