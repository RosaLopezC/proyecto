INSERT INTO nivel_academico (nombre) VALUES ('Inicial');
INSERT INTO nivel_academico (nombre) VALUES ('Primaria');
INSERT INTO nivel_academico (nombre) VALUES ('Secundaria');
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, '3 años' FROM nivel_academico WHERE nombre = 'Inicial';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, '4 años' FROM nivel_academico WHERE nombre = 'Inicial';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, '5 años' FROM nivel_academico WHERE nombre = 'Inicial';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Primer grado' FROM nivel_academico WHERE nombre = 'Primaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Segundo grado' FROM nivel_academico WHERE nombre = 'Primaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Tercer grado' FROM nivel_academico WHERE nombre = 'Primaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Cuarto grado' FROM nivel_academico WHERE nombre = 'Primaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Quinto grado' FROM nivel_academico WHERE nombre = 'Primaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Sexto grado' FROM nivel_academico WHERE nombre = 'Primaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Primero' FROM nivel_academico WHERE nombre = 'Secundaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Segundo' FROM nivel_academico WHERE nombre = 'Secundaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Tercero' FROM nivel_academico WHERE nombre = 'Secundaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Cuarto' FROM nivel_academico WHERE nombre = 'Secundaria';
INSERT INTO grado (nivel_academico_id, nombre_grado)
SELECT id, 'Quinto' FROM nivel_academico WHERE nombre = 'Secundaria';
