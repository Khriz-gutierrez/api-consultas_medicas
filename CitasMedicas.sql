PGDMP  1                    }            gestion_de_consultas    17.4    17.4 &               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false                       1262    17009    gestion_de_consultas    DATABASE     �   CREATE DATABASE gestion_de_consultas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
 $   DROP DATABASE gestion_de_consultas;
                     postgres    false            �            1259    17032    citas    TABLE     �  CREATE TABLE public.citas (
    id integer NOT NULL,
    paciente_id integer NOT NULL,
    medico_id integer NOT NULL,
    fecha_hora timestamp without time zone NOT NULL,
    estado character varying(20) DEFAULT 'programada'::character varying,
    CONSTRAINT citas_estado_check CHECK (((estado)::text = ANY ((ARRAY['programada'::character varying, 'completada'::character varying, 'cancelada'::character varying])::text[])))
);
    DROP TABLE public.citas;
       public         heap r       postgres    false            �            1259    17031    citas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.citas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.citas_id_seq;
       public               postgres    false    222                       0    0    citas_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.citas_id_seq OWNED BY public.citas.id;
          public               postgres    false    221            �            1259    17051 	   consultas    TABLE     �   CREATE TABLE public.consultas (
    id integer NOT NULL,
    cita_id integer NOT NULL,
    sintomas text,
    diagnostico text,
    tratamiento text,
    notas text
);
    DROP TABLE public.consultas;
       public         heap r       postgres    false            �            1259    17050    consultas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.consultas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.consultas_id_seq;
       public               postgres    false    224                       0    0    consultas_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.consultas_id_seq OWNED BY public.consultas.id;
          public               postgres    false    223            �            1259    17023    medicos    TABLE       CREATE TABLE public.medicos (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    especialidad character varying(100) NOT NULL,
    correo character varying(150) NOT NULL,
    telefono character varying(20)
);
    DROP TABLE public.medicos;
       public         heap r       postgres    false            �            1259    17022    medicos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.medicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.medicos_id_seq;
       public               postgres    false    220                       0    0    medicos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.medicos_id_seq OWNED BY public.medicos.id;
          public               postgres    false    219            �            1259    17011 	   pacientes    TABLE     �  CREATE TABLE public.pacientes (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    fecha_nacimiento date NOT NULL,
    sexo character varying(10),
    correo character varying(150) NOT NULL,
    telefono character varying(20),
    direccion text,
    CONSTRAINT pacientes_sexo_check CHECK (((sexo)::text = ANY ((ARRAY['Masculino'::character varying, 'Femenino'::character varying, 'Otro'::character varying])::text[])))
);
    DROP TABLE public.pacientes;
       public         heap r       postgres    false            �            1259    17010    pacientes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pacientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.pacientes_id_seq;
       public               postgres    false    218                        0    0    pacientes_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.pacientes_id_seq OWNED BY public.pacientes.id;
          public               postgres    false    217            h           2604    17035    citas id    DEFAULT     d   ALTER TABLE ONLY public.citas ALTER COLUMN id SET DEFAULT nextval('public.citas_id_seq'::regclass);
 7   ALTER TABLE public.citas ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            j           2604    17054    consultas id    DEFAULT     l   ALTER TABLE ONLY public.consultas ALTER COLUMN id SET DEFAULT nextval('public.consultas_id_seq'::regclass);
 ;   ALTER TABLE public.consultas ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    224    223    224            g           2604    17026 
   medicos id    DEFAULT     h   ALTER TABLE ONLY public.medicos ALTER COLUMN id SET DEFAULT nextval('public.medicos_id_seq'::regclass);
 9   ALTER TABLE public.medicos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            f           2604    17014    pacientes id    DEFAULT     l   ALTER TABLE ONLY public.pacientes ALTER COLUMN id SET DEFAULT nextval('public.pacientes_id_seq'::regclass);
 ;   ALTER TABLE public.pacientes ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218                      0    17032    citas 
   TABLE DATA           O   COPY public.citas (id, paciente_id, medico_id, fecha_hora, estado) FROM stdin;
    public               postgres    false    222   l-                 0    17051 	   consultas 
   TABLE DATA           [   COPY public.consultas (id, cita_id, sintomas, diagnostico, tratamiento, notas) FROM stdin;
    public               postgres    false    224   �-                 0    17023    medicos 
   TABLE DATA           W   COPY public.medicos (id, nombre, apellido, especialidad, correo, telefono) FROM stdin;
    public               postgres    false    220    .                 0    17011 	   pacientes 
   TABLE DATA           n   COPY public.pacientes (id, nombre, apellido, fecha_nacimiento, sexo, correo, telefono, direccion) FROM stdin;
    public               postgres    false    218   �.       !           0    0    citas_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.citas_id_seq', 3, true);
          public               postgres    false    221            "           0    0    consultas_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.consultas_id_seq', 1, true);
          public               postgres    false    223            #           0    0    medicos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.medicos_id_seq', 3, true);
          public               postgres    false    219            $           0    0    pacientes_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.pacientes_id_seq', 3, true);
          public               postgres    false    217            v           2606    17039    citas citas_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_pkey;
       public                 postgres    false    222            x           2606    17060    consultas consultas_cita_id_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_cita_id_key UNIQUE (cita_id);
 I   ALTER TABLE ONLY public.consultas DROP CONSTRAINT consultas_cita_id_key;
       public                 postgres    false    224            z           2606    17058    consultas consultas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.consultas DROP CONSTRAINT consultas_pkey;
       public                 postgres    false    224            r           2606    17030    medicos medicos_correo_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_correo_key UNIQUE (correo);
 D   ALTER TABLE ONLY public.medicos DROP CONSTRAINT medicos_correo_key;
       public                 postgres    false    220            t           2606    17028    medicos medicos_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.medicos DROP CONSTRAINT medicos_pkey;
       public                 postgres    false    220            n           2606    17021    pacientes pacientes_correo_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_correo_key UNIQUE (correo);
 H   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_correo_key;
       public                 postgres    false    218            p           2606    17019    pacientes pacientes_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_pkey;
       public                 postgres    false    218            {           2606    17045    citas citas_medico_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_medico_id_fkey FOREIGN KEY (medico_id) REFERENCES public.medicos(id) ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_medico_id_fkey;
       public               postgres    false    4724    222    220            |           2606    17040    citas citas_paciente_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_paciente_id_fkey FOREIGN KEY (paciente_id) REFERENCES public.pacientes(id) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.citas DROP CONSTRAINT citas_paciente_id_fkey;
       public               postgres    false    218    222    4720            }           2606    17061     consultas consultas_cita_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_cita_id_fkey FOREIGN KEY (cita_id) REFERENCES public.citas(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.consultas DROP CONSTRAINT consultas_cita_id_fkey;
       public               postgres    false    4726    224    222               M   x�3�4A#S]S]#C+�,(�O/J�MLI�2�A�"CCC+ctE�� �d��%Ԥ��܂����=... �#5         G   x�3�4�t���/RH�SH�Q(HM���t�K��K�t,.�,2R2�29���J��s@JrS��b���� �k�            x�3��M,:�6�381�$���9�(%3?'?$��WuH����L�K���455�5.#�����Ĳ|΀Ԕ���Q�zI !t]@l�e�隓������X��Z��X�.U�$����b���� Z9:         �   x�U��
�0F盧tNȏ��ft����r�Ai"�u�|
_�D�Y�����=���B�m+�0L*���"`@~ͻ�͈��!�`Lv2�E�-���J��Mp�)�)��"1���i�}��,��WX�T���V+�&���"�6\�<�&j��_�V�.[:�{�iU7-9sB�wqB�     