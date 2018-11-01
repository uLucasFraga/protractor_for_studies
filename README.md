# PROTRACTOR + CUCUMBERJS - básico

Repositório destinado para aprendermos a usar testes automatizados com o Protractor.

## Pré-requisitos para rodar localmente
* [Intalação do node](https://nodejs.org/en/download/)
* [Intalação do npm](https://www.npmjs.com/get-npm)
* [Intalação do protractor](https://www.npmjs.com/package/protractor)

#### Atenção: É necessário que a máquina esteja com todas as dependencias instaladas:
* Usar o comando abaixo onde existam os arquivos `package.json`

```npm install``` ou  ```npm run simple_build```

(raíz: `/protractor_for_beginners` e na pasta: `/shared_libs`)

## Iniciando os passos para rodar os testes
* Entrar pelo terminal na raíz do projeto
* Usar o comando ```npm run start_update_webdriver```

#### Atenção 2: Será necessário abrir outra aba do terminal para que o servidor consiga trabalhar na aba antiga.

## Rodando os testes de regressão

* Entrar na raíz do projeto `/protractor_for_beginners`
* Usar o comando ```npm run test```

Ou podemos seguir esse caminho abaixo.
* Entrar na a pasta `/quality_assurance`
* Usar o comando ```protractor conf.js```


#### Atenção 3: Vale lembrar que o arquivo `conf.js` encontra-se com um campo chamado *tag* onde é possível escolher um determinado cenário apenas. Nesse script ele está ativo para rodar toda a funcionalidade @learning

## Resumindo o projeto
* A pasta principal é a `quality_assurance` e dentro dela temos a `features`
* `protractor_example.feature` são nossos cenários de exemplo
* `page_objetcs` ficam nossos elementos e métodos da página
* `step_definitions` são nossos steps gerados pelo cucumber
* `report` será uma a pasta onde o cucumber colocará o report.html (caso não exista, ele criará ao final dos testes)
* `shared_libs` são métodos auxiliáres que podemos usar dentro de todo o projeto
* `conf.js` nosso arquivo de configuração
* `environments_parameters.json` são nossas urls e ambientes
* `package.json` arquivo com nossas dependências e os scripts

-------------------------------------
#### Dúvidas: lucass.fragaa@gmail.com

###### Skype: live:lucass.fragaa

-------------------------------------
