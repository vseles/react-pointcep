# PointCEP

Interface para consulta de CEPs e Endereços feita em React.

A build atual está em um ambiente [**NextJS**](https://nextjs.org/).

# Funcionalidades

* Integração com [**ViaCep**](http://viacep.com.br/) para consulta direta de CEPs;
* Integração com [**Google Geocode**](https://developers.google.com/maps/documentation/geocoding/overview) para consultar Endereços, Latitude e Longitude e atrela-los a CEPs;
* Integração com [**Google Maps**](https://developers.google.com/maps/documentation/javascript/overview) para apontamento e visualização dos CEPs e endereços.

**Etapa inicial:**


![Inicio](https://i.imgur.com/1bOr0HV.jpg)

**Consulta de CEP:**


![CEP](https://i.imgur.com/YRgacfT.jpg)

**Consulta de Endereço:**


![Endereço](https://i.imgur.com/gO6YIAw.jpg)


# Rodando o projeto

O projeto está utilizando [**Yarn**](https://classic.yarnpkg.com/pt-BR/) para efetuar o gerenciamento de pacotes NPM.

É necessário criar um arquivo **.env.local** ([ver template](https://github.com/vseles/react-pointcep/blob/master/.env.template)) com os parâmetros:

**NEXT_PUBLIC_MAPS_KEY=[API KEY DO GOOGLE MAPS]**

**NEXT_PUBLIC_GEOCODE_KEY=[API KEY DO GOOGLE GEOCODE]**

# Comandos de diretório

* **yarn install** - Instala as dependências do projeto.
* **yarn dev** - Roda o projeto em uma rede local. (ex: localhost:3000).
* **yarn build** - Gera a build do projeto.
