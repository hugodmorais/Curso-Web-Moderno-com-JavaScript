SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id

SELECT sigla FROM estados e, cidades c
WHERE e.id = c.estado_id -- Possivel consultar a coluna sigla, porém, por exemplo
-- Não é possivel consultar  de uma forma direta a coluna nome pois esta é ambigua pois está presente tanto
-- na tabela cidades como na tabela estados, possivel consultar da forma abaixo exemplificada:

SELECT c.nome FROM estados e, cidades c
WHERE e.id = c.estado_id 

SELECT e.nome, c.nome, regiao FROM estados e, cidades c
WHERE e.id = c.estado_id 

SELECT 
    c.nome AS Cidade, 
    c.nome AS Estado, 
    regiao AS Região
FROM estados e
INNER JOIN cidades c 
    ON e.id = c.estado_id



