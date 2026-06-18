-- Migration: Add pilot_jobs and pilot_stories tables
-- Also seeds initial data from the existing static arrays

CREATE TABLE IF NOT EXISTS `pilot_jobs` (
  `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `title` varchar(255) NOT NULL,
  `airline` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `type` enum('First Officer','Captain','Cadet','Instructor','Other') NOT NULL,
  `hours` varchar(100),
  `salary` varchar(200),
  `deadline` varchar(100),
  `link` varchar(500) NOT NULL,
  `badge` varchar(100),
  `description` text NOT NULL,
  `region` enum('UK','US','Global') NOT NULL DEFAULT 'UK',
  `active` boolean NOT NULL DEFAULT true,
  `postedAt` timestamp NOT NULL DEFAULT (now()),
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `pilot_stories` (
  `id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` varchar(200) NOT NULL,
  `role` varchar(200) NOT NULL,
  `airline` varchar(200),
  `route` varchar(100),
  `trainingDuration` varchar(100),
  `totalCost` varchar(100),
  `school` varchar(200),
  `country` varchar(100),
  `heroQuote` text NOT NULL,
  `qa` text NOT NULL,
  `tags` varchar(500),
  `imageUrl` varchar(500),
  `active` boolean NOT NULL DEFAULT true,
  `featured` boolean NOT NULL DEFAULT false,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP
);
