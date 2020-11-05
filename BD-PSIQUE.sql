-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bdpm1ozus836ihen5sru-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 05, 2020 at 12:57 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdpm1ozus836ihen5sru`
--

-- --------------------------------------------------------

--
-- Table structure for table `ArteTerapia`
--

CREATE TABLE `ArteTerapia` (
  `Cons_como-me-siento` text NOT NULL,
  `Figura_mandala` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `CareTips`
--

CREATE TABLE `CareTips` (
  `Cons_como-me-siento` text NOT NULL,
  `Recomendaciones` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Como_me_siento`
--

CREATE TABLE `Como_me_siento` (
  `Descripción` text NOT NULL,
  `Recomendaciones` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Como_me_siento`
--

INSERT INTO `Como_me_siento` (`Descripción`, `Recomendaciones`) VALUES
('Rabia: este síntoma tatatatatata', 'Te recomendamos que hagas esto esto y esto');

-- --------------------------------------------------------

--
-- Table structure for table `Mi_Diario`
--

CREATE TABLE `Mi_Diario` (
  `Doc_Usuario` varchar(20) NOT NULL,
  `Cons_CareTips` varchar(10) NOT NULL,
  `Cons_como_me_siento` varchar(10) NOT NULL,
  `Fecha_Actual` date NOT NULL,
  `Nota_Diario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Mi_Diario`
--

INSERT INTO `Mi_Diario` (`Doc_Usuario`, `Cons_CareTips`, `Cons_como_me_siento`, `Fecha_Actual`, `Nota_Diario`) VALUES
('1005465086', 'Rabia', 'Rabia', '2020-10-30', 'Juan Perez, Te amo men, eres el mejor, ojo me hace perder pues la media. vos me caes bien...');

-- --------------------------------------------------------

--
-- Table structure for table `Mi_Perfil`
--

CREATE TABLE `Mi_Perfil` (
  `Nombre_Usuario` varchar(15) NOT NULL,
  `Genero` varchar(10) NOT NULL,
  `Fecha_Nacimiento` date NOT NULL,
  `Contrasena` varchar(20) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `Id_Usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Mi_Perfil`
--
ALTER TABLE `Mi_Perfil`
  ADD PRIMARY KEY (`Nombre_Usuario`),
  ADD UNIQUE KEY `correonk` (`Correo`),
  ADD UNIQUE KEY `Idunk` (`Id_Usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
