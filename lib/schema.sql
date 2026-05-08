-- ManitasGo — Schema Vercel Postgres

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  nombre TEXT,
  apellidos TEXT,
  direccion TEXT,
  foto_url TEXT,
  tipo TEXT CHECK (tipo IN ('hogarista', 'manitas')),
  verificado BOOLEAN DEFAULT false,
  saldo DECIMAL(10,2) DEFAULT 0.00,
  rating DECIMAL(3,2),
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tareas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hogarista_id UUID REFERENCES users(id),
  titulo TEXT NOT NULL,
  descripcion TEXT,
  categoria TEXT CHECK (categoria IN (
    'Reparaciones y Mantenimiento','Instalaciones','Electricidad',
    'Fontanería','Tecnología y Electrónica','Otros'
  )),
  tipo_precio TEXT CHECK (tipo_precio IN ('fijo', 'rango')),
  precio_fijo DECIMAL(10,2),
  precio_min DECIMAL(10,2),
  precio_max DECIMAL(10,2),
  estado TEXT DEFAULT 'pendiente' CHECK (estado IN (
    'pendiente','en_progreso','completada','cancelada'
  )),
  direccion TEXT,
  latitud DECIMAL(10,7),
  longitud DECIMAL(10,7),
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS fotos_tareas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tarea_id UUID REFERENCES tareas(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS propuestas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tarea_id UUID REFERENCES tareas(id) ON DELETE CASCADE,
  manitas_id UUID REFERENCES users(id),
  mensaje TEXT,
  precio_propuesto DECIMAL(10,2),
  estado TEXT DEFAULT 'pendiente' CHECK (estado IN ('pendiente','aceptada','rechazada')),
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS mensajes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tarea_id UUID REFERENCES tareas(id),
  sender_id UUID REFERENCES users(id),
  contenido TEXT,
  adjunto_url TEXT,
  leido BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS valoraciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tarea_id UUID REFERENCES tareas(id),
  autor_id UUID REFERENCES users(id),
  destinatario_id UUID REFERENCES users(id),
  estrellas INTEGER CHECK (estrellas BETWEEN 1 AND 5),
  comentario TEXT,
  created_at TIMESTAMP DEFAULT now()
);
