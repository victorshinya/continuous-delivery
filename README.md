# IBM Continuous Delivery com aplicação Node.js

[![Build Status](https://travis-ci.org/victorshinya/continuous-delivery.svg?branch=master)](https://travis-ci.org/victorshinya/continuous-delivery)

Aprenda a usar o serviço IBM Continuous Delivery para criar sua própria (e customizada) esteira de DevOps usando uma aplicação Node.js. Se você tiver interesse em se aprofundar no assunto, dê uma olhada nesses artigos: [Integração Contínua](https://www.thoughtworks.com/pt/continuous-integration) e [Entrega Contínua](https://www.thoughtworks.com/pt/continuous-delivery).

No momento, usaremos esta aplicação em Node.js com Express.js e MongoDB (biblioteca do Mongoose) como nosso código fonte e exemplo. Para executar/rodar alguns *scripts* de teste criado, vamos usar [Mocha](https://mochajs.org) e [Chai](http://www.chaijs.com) (framework de teste e biblioteca de BDD/TDD).

## Como funciona

Com o IBM Continuous Delivery, você consegue criar, testar e entregar aplicativos usando práticas de DevOps. Você pode criar e configurar uma nova cadeia de ferramentas a partir de um modelo padrão disponível ou criar um customizado utilizando ferramentas conhecidas como Github, Jenkins, SonarQube, Slack e outros.

Tudo começa criando uma instancia do serviço dentro do [Catálogo no IBM Cloud](https://console.bluemix.net). Em dois cliques você adiciona este serviço no seu Dashboard e começa a configurar toda esteira de DevOps.

![Continuous Delivery no Catálogo do IBM Cloud](https://github.com/victorshinya/continuous-delivery/blob/master/screenshots/continuous-delivery-no-catalogo.png)

Como exemplo de uma esteira completa, temos uma cadeia de ferramentas usada para criação e manutenção de um microserviço. Esta cadeia tem como objetivo, entregar novas versões da solução em ambiente de desenvolvimento, teste e produção. Cada ambiente em um local separado, mas todos integrados com os serviços de comunicação (Slack), gerenciamento de incidentes (PagerDuty), controle de versionamento (Git) e reportes do uso de DevOps (DevOps Insights).

![Cadeia de Ferramentas de um Microserviço](https://github.com/victorshinya/continuous-delivery/blob/master/screenshots/toolchain-microservices.png)

## Testar a aplicação

[![Deploy to IBM Cloud](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/victorshinya/continuous-delivery)
