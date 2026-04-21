# Processo Tecnico de Imagens

Este documento registra o procedimento tecnico para coletar e preparar imagens em lote, especialmente quando a fonte for o `Wikimedia Commons`.

## Wikimedia Commons em Lote

Quando varias imagens precisarem ser baixadas na mesma sessao:

- trabalhar em lotes pequenos, em vez de tentar baixar tudo de uma vez
- colocar intervalos entre downloads consecutivos
- se o Commons responder com `429` ou outro bloqueio temporario, parar e aguardar antes de retomar
- preferir retomar em nova rodada, em vez de insistir com muitas tentativas seguidas

Na pratica, o que funcionou bem no projeto foi:

- baixar poucos arquivos por rodada
- esperar alguns segundos entre um download e outro
- esperar mais tempo entre rodadas quando o Commons comecar a limitar requisicoes

## URL de Download

Dependendo do arquivo, pode haver diferenca entre formatos de URL do Commons.

Priorizar, quando necessario:

- `https://commons.wikimedia.org/wiki/Special:Redirect/file/<nome-do-arquivo>`

Se um formato falhar, validar se o nome do arquivo esta correto e testar o outro formato de download antes de desistir da imagem.

## Otimizacao para Web

Depois do download:

- redimensionar localmente para tamanho adequado ao uso real da pagina
- para hero de navio, uma largura maxima em torno de `1600px` costuma funcionar bem
- aplicar compressao moderada para web, preservando boa qualidade visual
- registrar no arquivo interno se houve redimensionamento, compressao, recorte ou outra adaptacao

## Cuidados

- nao tratar este processo como regra editorial ou juridica
- a licenca continua sendo o criterio principal
- se a imagem tiver licenca inadequada, nao usar, mesmo que o download tecnico funcione
- se nao houver foto compativel, seguir a diretriz principal e nao inventar uma "foto" com ilustracao
