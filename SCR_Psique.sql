DROP TABLE IF EXISTS `Como_me_siento`;
DROP TABLE IF EXISTS `mi_diario`;

DROP TABLE IF EXISTS `arteterapia`;

DROP TABLE IF EXISTS `mi_perfil`;
DROP TABLE IF EXISTS `caretips`;

CREATE TABLE IF NOT EXISTS `caretips` (
  `id_caretips` int(3) NOT NULL AUTO_INCREMENT,
  `estado` varchar(20) NOT NULL,
  `Recomendaciones` varchar(200) NOT NULL,
  PRIMARY KEY (`id_caretips`),
  UNIQUE KEY `estado` (`estado`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `arteterapia` (
  `cons_arteterapia` int(11) NOT NULL AUTO_INCREMENT,
  `id_caretips` int(3) NOT NULL,
  `Figura_mandala` varchar(50) NOT NULL COMMENT 'Link figura',
  PRIMARY KEY (`cons_arteterapia`),
  FOREIGN   key(id_caretips) REFERENCES caretips(id_caretips)
  ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `Como_me_siento` (
  `Consecutivo` int(20) NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(100) NOT NULL,
  `Recomendaciones` varchar(200) NOT NULL,
  `Id_CareTips` int(10) NOT NULL,
  PRIMARY KEY (`Consecutivo`),
   FOREIGN   key(id_caretips) REFERENCES caretips(id_caretips)   
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `mi_perfil` (
  `Id_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Correo` varchar(40) NOT NULL,
  `Nombre_Usuario` varchar(15) NOT NULL,
  `Genero` varchar(10) NOT NULL,
  `Fecha_Nacimiento` date NOT NULL,
  `Contrasena` varchar(20) NOT NULL,
  PRIMARY KEY (`Id_Usuario`),
  UNIQUE KEY `correonk` (`Correo`)
 
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8;



CREATE TABLE IF NOT EXISTS `mi_diario` (
  `Consecutivo` int(10) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `Fecha_Actual` date NOT NULL,
  `Nota_Diario` varchar(250) NOT NULL,
  PRIMARY KEY (`Consecutivo`),
      FOREIGN   key(id_usuario) REFERENCES mi_perfil(id_usuario)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `arteterapia`
--
--
-- Dumping data for table `caretips`
--

INSERT INTO `caretips` (`id_caretips`, `estado`, `Recomendaciones`) VALUES
(1, 'Rabia', 'Medita, toma, respira lento'),
(2, 'Féliz', 'Escucha mùsica, canta'),
(3, 'Triste', 'Visita un hogar de paso, consigue una mascota'),
(5, 'Angustia', 'come una fruta');



INSERT INTO `arteterapia` (`cons_arteterapia`, `id_caretips`, `Figura_mandala`) VALUES
(1, 1, 'https://mandalas.dibujos.net/mandala-maya.html'),
(2, 1, 'https://mandalas.dibujos.net/mandala-maya.html'),
(3, 2, 'https://mandalas.dibujos.net/mandala-maya.html');




INSERT INTO `mi_perfil` (`Id_Usuario`, `Correo`, `Nombre_Usuario`, `Genero`, `Fecha_Nacimiento`, `Contrasena`) VALUES
(125, 'mariacamilaortiz@gmail.com', 'cami_77', 'femenino', '2008-12-31', '123456');

INSERT INTO `mi_diario` (`Consecutivo`, `id_usuario`, `Fecha_Actual`, `Nota_Diario`) VALUES
(1, 125, '2020-10-30', 'Juan Perez, Te amo men, eres el mejor, ojo me hace perder pues la media. vos me caes bien...'),
(2, 125, '2020-11-05', 'asdasasasasasasasas');
