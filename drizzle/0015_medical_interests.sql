CREATE TABLE `medical_interests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(320) NOT NULL,
  `phone` varchar(50),
  `country` varchar(100),
  `medicalConcern` text,
  `message` text,
  `source` varchar(100),
  `leadId` int,
  `consentToContact` boolean NOT NULL DEFAULT false,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  PRIMARY KEY (`id`)
);
