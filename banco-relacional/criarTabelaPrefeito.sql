CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),-- Unico, ou seja, um prefeito só pode ser apontado para uma cidade
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
)