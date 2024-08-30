# Por que Express.js e não Nest.js ?

Levei em consideração a informação que eu tenho sobre o time atual, express.js por exemplo é uma _framework_
onde qualquer desenvolvedor, em qualquer nível, terá facilidade em desenvolver, dar manutenção e criar novas `features`.`

Nest.js é um pouco mais robusto em termos de desenvolvimento, pois engloba já no seu modo de desenvolver uma série de padrões e
arquiteturas impostas, há uma curva de aprendizado maior. Mas no firm, entrega um _endpoint_ igual o express.js!

Portanto meu modo de tornar o express.js mais robusto, porem menos complexo e mais acessível, é facilitar o entendimento
através da estrutura de arquivos, que nesse caso vou adotar uma padrão bem distribuído.

# Reservoir e OpenSea

Por que ? Por que eu gosto de desafio e isso tava muito fácil HAHAHA

Como o approch aqui é pegar as coleções de NFT, primariamente na _Reservoir_, então, imaginando e forcando um problema futuro, onde, por exemplo,
a _Reservoir_ para de funcionar, logo poderiamos rapidamente acioanr uma `FEATURE FLAG` para mudar o funcionamento para outro serviço, nesse caso a _OpenSea_.

Nesse caso, poderiamos de duas formas acionar um ou outro:

1. Em caso de demora ou falha na execução de um serviço, ex.: _Reservoir_, automaticamente o sistema pode acionar a _OpenSea_ no lugar.
2. Em caso de destinuidade do provider principal, acionar o outro. O mesmo poderia acontacer de 1:N _providers_.
3. (EXTRA) Teste A/B

Vale ver que eu criei um Type Genério para `Collection` onde tem alguns dados que são padrão. E dentro de cada serviço, há uma função que criei chamada `parser`, que
normaliza o retorno, pegando o dado de acordo com o especificado no _provider_. O resultado final é, que nossa _API_ retorn sempre dados padronizados, independente da fonte.
