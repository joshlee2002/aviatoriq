CREATE TABLE `calc_sessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`route` varchar(64) NOT NULL,
	`location` varchar(64) NOT NULL,
	`pace` varchar(32) NOT NULL,
	`experience` varchar(32) NOT NULL,
	`funding` varchar(32) NOT NULL,
	`totalEstimate` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `calc_sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `finance_interests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(200) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`trainingRoute` varchar(50),
	`estimatedBudget` varchar(50),
	`message` text,
	`source` varchar(100),
	`leadId` int,
	`consentToContact` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `finance_interests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `flight_deck_email_captures` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`name` varchar(200),
	`phase` varchar(50),
	`score` int,
	`biggestBarrier` varchar(100),
	`consentToContact` boolean NOT NULL DEFAULT false,
	`source` varchar(100) DEFAULT 'flight_deck_results',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `flight_deck_email_captures_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `flight_deck_shares` (
	`id` int AUTO_INCREMENT NOT NULL,
	`shareId` varchar(32) NOT NULL,
	`resultJson` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `flight_deck_shares_id` PRIMARY KEY(`id`),
	CONSTRAINT `flight_deck_shares_shareId_unique` UNIQUE(`shareId`)
);
--> statement-breakpoint
CREATE TABLE `school_subscriptions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`schoolId` int NOT NULL,
	`tier` enum('basic','featured','premium') NOT NULL DEFAULT 'basic',
	`status` enum('active','trialing','past_due','cancelled','pending') NOT NULL DEFAULT 'pending',
	`stripeCustomerId` varchar(255),
	`stripeSubscriptionId` varchar(255),
	`leadCreditsUsed` int NOT NULL DEFAULT 0,
	`leadCreditsLimit` int NOT NULL DEFAULT 0,
	`billingEmail` varchar(320),
	`activatedAt` timestamp,
	`expiresAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `school_subscriptions_id` PRIMARY KEY(`id`),
	CONSTRAINT `school_subscriptions_schoolId_unique` UNIQUE(`schoolId`)
);
