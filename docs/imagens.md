# Politica de Imagens do Poseidon Cruzeiros

Este arquivo define como o projeto deve selecionar, registrar, otimizar e creditar imagens usadas no site.

O objetivo e:
- evitar infracao de direitos autorais
- manter um padrao consistente de creditos
- facilitar futuras atualizacoes do site
- preservar boa performance de carregamento

## Principio Geral

So usar imagens com licenca clara e reaproveitamento permitido para uso no site.

Quando o assunto da pagina for uma entidade real que normalmente deve ser representada por fotografia
como navios, portos, companhias, destinos, terminais e pessoas:
- preferir foto real
- nao substituir foto real por ilustracao, renderizacao ou arte generativa so para "preencher" a pagina
- se nao houver foto com licenca compativel, nao publicar uma falsa foto
- nesses casos, ou deixar a pagina sem imagem, ou usar um placeholder claramente identificado como temporario, sem publicar como solucao final

Ilustracoes so devem ser usadas quando:
- a proposta editorial for claramente ilustrativa
- o conteudo nao depender de fidelidade fotografica
- ou a ilustracao estiver sinalizada como provisoria durante validacao interna

Fontes preferenciais:
- `CC0`
- `Public Domain Mark`
- dominio publico explicitamente informado
- `Unsplash`
- `Pexels`
- `Wikimedia Commons` com licenca livre valida para reutilizacao

Fontes que exigem mais cuidado:
- `CC BY`
- `CC BY-SA`
- acervos historicos com `Rights & Access` por item

Fontes que nao devem ser usadas sem permissao adicional clara:
- press centers de companhias maritimas
- bancos de imagens com uso restrito a imprensa
- sites de terceiros que nao sejam a fonte original da foto
- imagens sem licenca visivel
- imagens encontradas apenas em busca do Google ou em blogs

## Fontes Aceitas

### 1. Unsplash

Pode usar no site.

Regras:
- uso comercial permitido
- atribuicao normalmente nao e obrigatoria
- ainda assim, registrar autor e URL original internamente

Formato interno:
- `fonte: Unsplash`
- `licenca: Unsplash License`

### 2. Pexels

Pode usar no site.

Regras:
- uso comercial permitido
- atribuicao normalmente nao e obrigatoria
- ainda assim, registrar autor e URL original internamente

Formato interno:
- `fonte: Pexels`
- `licenca: Pexels License`

### 3. Wikimedia Commons

Pode usar somente apos checar a licenca do arquivo especifico.

Aceitar:
- `CC0`
- `Public Domain`
- `Public Domain Mark`
- `CC BY`
- `CC BY-SA`

Nao assumir que toda imagem do Commons e livre sem verificacao.

Sempre registrar:
- autor
- pagina do arquivo
- licenca exata
- link da licenca
- se houve corte, compressao ou adaptacao

### 4. National Archives / Library of Congress / Smithsonian / acervos historicos

Pode usar somente apos checar a pagina do item ou a politica da colecao.

Sempre registrar:
- instituicao
- pagina do item
- condicao de uso indicada
- observacoes de risco, se houver

Se a pagina apenas disser algo como `no known restrictions`, tratar com cautela e validar melhor antes de publicar.

## Licencas que o site pode usar

### CC0

Uso livre.

Padrao:
- credito publico opcional
- registro interno obrigatorio

### Dominio publico / Public Domain Mark

Uso livre.

Padrao:
- credito publico opcional
- registro interno obrigatorio

### CC BY 4.0

Uso permitido com atribuicao.

Obrigatorio:
- nome do autor
- fonte
- link da licenca
- informar se houve alteracao relevante

### CC BY-SA

Uso permitido com atribuicao e compartilhamento sob a mesma licenca para derivados.

Atenção:
- usar com mais cuidado
- se a imagem for apenas comprimida, recortada ou ajustada, registrar a alteracao
- manter o texto de credito completo

## Fontes que devem ser evitadas

Evitar:
- `CruiseMapper`
- imagens de press kit sem permissao clara para reutilizacao no site
- redes sociais de companhias ou fotografos sem licenca explicita
- Pinterest, blogs, agregadores e sites de noticias como origem de imagem

Motivo:
- mesmo quando a imagem parece publica, isso nao significa que o projeto pode reutiliza-la legalmente

## Registro Obrigatorio de Cada Imagem

Toda imagem nova usada no site deve ter um registro com estes campos:

- `arquivo_local`
- `pagina_do_site`
- `navio_ou_tema`
- `fonte`
- `url_original`
- `autor`
- `licenca`
- `url_licenca`
- `data_de_consulta`
- `houve_edicao`
- `tipo_de_edicao`
- `credito_publico`

## Modelo de Registro

```txt
arquivo_local: assets/images/navios/msc-world-america/hero.webp
pagina_do_site: /companhias/msc-cruzeiros/msc-world-america/
navio_ou_tema: MSC World America
fonte: Wikimedia Commons
url_original: https://commons.wikimedia.org/wiki/File:MSC_World_America.jpg
autor: JPD115
licenca: CC BY-SA 4.0
url_licenca: https://creativecommons.org/licenses/by-sa/4.0/
data_de_consulta: 2026-04-21
houve_edicao: sim
tipo_de_edicao: recorte e conversao para webp
credito_publico: Foto: JPD115, via Wikimedia Commons, CC BY-SA 4.0. Recortada e otimizada pelo Poseidon.
```

## Padrao de Credito Publico

### Unsplash

Quando quiser mostrar credito na pagina:

```txt
Foto: Nome do autor / Unsplash
```

### Pexels

Quando quiser mostrar credito na pagina:

```txt
Foto: Nome do autor / Pexels
```

### CC BY

```txt
Foto: Nome do autor, via Wikimedia Commons, CC BY 4.0.
```

Se houver edicao:

```txt
Foto: Nome do autor, via Wikimedia Commons, CC BY 4.0. Recortada e otimizada pelo Poseidon.
```

### CC BY-SA

```txt
Foto: Nome do autor, via Wikimedia Commons, CC BY-SA 4.0.
```

Se houver edicao:

```txt
Foto: Nome do autor, via Wikimedia Commons, CC BY-SA 4.0. Ajustada pelo Poseidon.
```

### Dominio publico

```txt
Imagem em dominio publico. Fonte: Nome do acervo.
```

## Onde Mostrar os Creditos no Site

Padrao recomendado:
- quando houver 1 imagem principal, o credito pode ficar logo abaixo da imagem
- quando houver varias imagens na pagina, preferir uma secao final chamada `Creditos das imagens`

Evitar:
- poluir o layout com creditos longos em excesso no meio do conteudo

## Padrao Tecnico de Arquivos

Sempre que possivel:
- converter para `webp`
- manter versao otimizada para web
- evitar arquivos grandes sem necessidade

Metas recomendadas:
- imagem comum: tentar ficar abaixo de `300 KB`
- imagem hero: tentar ficar abaixo de `500 KB`
- usar dimensoes coerentes com o layout, sem subir arquivo gigante para exibir pequeno

## Checklist Antes de Publicar

1. A licenca permite uso no site?
2. A pagina original da imagem foi salva no registro?
3. O autor foi anotado?
4. A licenca exata foi anotada?
5. O texto de credito foi preparado?
6. A imagem foi otimizada para web?
7. O arquivo final esta com nome padronizado?

## Regra Final

Se houver duvida sobre a licenca, nao publicar a imagem ate confirmar.

Quando houver incerteza:
- preferir outra imagem
- ou usar uma ilustracao propria temporaria
