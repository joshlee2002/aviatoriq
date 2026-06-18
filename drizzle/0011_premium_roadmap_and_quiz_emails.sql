-- Migration 0011: Add roadmap_purchases and quiz_email_captures tables
CREATE TABLE IF NOT EXISTS `roadmap_purchases` (
  `id` int AUTO_INCREMENT NOT NULL,
  `leadId` int NOT NULL,
  `stripeSessionId` varchar(255) NOT NULL,
  `stripePaymentIntentId` varchar(255),
  `amount` int NOT NULL DEFAULT 900,
  `currency` varchar(10) NOT NULL DEFAULT 'gbp',
  `status` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
  `email` varchar(320) NOT NULL,
  `name` varchar(200),
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  `updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `roadmap_purchases_id` PRIMARY KEY(`id`),
  CONSTRAINT `roadmap_purchases_stripe_session_unique` UNIQUE(`stripeSessionId`)
);--> statement-breakpoint

CREATE TABLE IF NOT EXISTS `quiz_email_captures` (
  `id` int AUTO_INCREMENT NOT NULL,
  `email` varchar(320) NOT NULL,
  `name` varchar(200),
  `quizSlug` varchar(100) NOT NULL,
  `resultId` varchar(100) NOT NULL,
  `resultTitle` varchar(200),
  `consentToContact` boolean NOT NULL DEFAULT false,
  `createdAt` timestamp NOT NULL DEFAULT (now()),
  CONSTRAINT `quiz_email_captures_id` PRIMARY KEY(`id`)
);
