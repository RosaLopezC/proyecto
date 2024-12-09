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
INSERT INTO curso (titulo) VALUES ('Números');
INSERT INTO curso (titulo) VALUES ('Matemáticas');
INSERT INTO curso (titulo) VALUES ('Aritmética');
INSERT INTO curso (titulo) VALUES ('Geometría');
INSERT INTO curso (titulo) VALUES ('Álgebra');
INSERT INTO curso (titulo) VALUES ('R.M.');
INSERT INTO curso (titulo) VALUES ('Trigonometría');
INSERT INTO curso (titulo) VALUES ('Física');
INSERT INTO curso (titulo, grado_id)
SELECT 'Números', id
FROM grado
WHERE nivel_academico_id = 2;
-- Aritmética
INSERT INTO curso (titulo, grado_id)
SELECT 'Aritmética', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado IN ('Cuarto grado', 'Quinto grado');

-- Geometría
INSERT INTO curso (titulo, grado_id)
SELECT 'Geometría', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado IN ('Cuarto grado', 'Quinto grado');

-- Álgebra
INSERT INTO curso (titulo, grado_id)
SELECT 'Álgebra', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado IN ('Cuarto grado', 'Quinto grado');

-- R.M.
INSERT INTO curso (titulo, grado_id)
SELECT 'R.M.', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado IN ('Cuarto grado', 'Quinto grado');
-- Aritmética
INSERT INTO curso (titulo, grado_id)
SELECT 'Aritmética', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado = 'Sexto grado';

-- Geometría
INSERT INTO curso (titulo, grado_id)
SELECT 'Geometría', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado = 'Sexto grado';

-- Álgebra
INSERT INTO curso (titulo, grado_id)
SELECT 'Álgebra', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado = 'Sexto grado';

-- R.M.
INSERT INTO curso (titulo, grado_id)
SELECT 'R.M.', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado = 'Sexto grado';

-- Trigonometría
INSERT INTO curso (titulo, grado_id)
SELECT 'Trigonometría', id
FROM grado
WHERE nivel_academico_id = 3
  AND nombre_grado = 'Sexto grado';
-- Aritmética
INSERT INTO curso (titulo, grado_id)
SELECT 'Aritmética', id
FROM grado
WHERE nivel_academico_id = 4;

-- Geometría
INSERT INTO curso (titulo, grado_id)
SELECT 'Geometría', id
FROM grado
WHERE nivel_academico_id = 4;

-- Álgebra
INSERT INTO curso (titulo, grado_id)
SELECT 'Álgebra', id
FROM grado
WHERE nivel_academico_id = 4;

-- R.M.
INSERT INTO curso (titulo, grado_id)
SELECT 'R.M.', id
FROM grado
WHERE nivel_academico_id = 4;

-- Trigonometría
INSERT INTO curso (titulo, grado_id)
SELECT 'Trigonometría', id
FROM grado
WHERE nivel_academico_id = 4;

-- Física
INSERT INTO curso (titulo, grado_id)
SELECT 'Física', id
FROM grado
WHERE nivel_academico_id = 4;

