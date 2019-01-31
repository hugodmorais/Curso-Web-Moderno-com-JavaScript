SELECT
    regiao AS 'Região',
    sum(populacao) AS Total
FROM estados
group by regiao
ORDER BY Total desc

SELECT
    sum(populacao) AS Total
FROM estados

SELECT
    avg(populacao) AS Total
FROM estados


