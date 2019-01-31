INSERT INTO empresas 
    (nome, cnpj)
VALUES
    ('Bradesco', 989898989898),
    ('Vale', 23232323232323),
    ('Cielo', 3243243243432);

ALTER TABLE empresas MODIFY cnpj VARCHAR(15);

SELECT * FROM empresas;
SELECT * FROM cidades;

desc empresas;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 5, 1),
    (1, 6, 0),
    (2, 5, 0),
    (2, 6, 1)

SELECT * FROM empresas_unidades;

DELETE  FROM empresas_unidades 
WHERE cidade_id = 1 || cidade_id = 2