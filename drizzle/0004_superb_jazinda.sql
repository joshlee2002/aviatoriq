CREATE TABLE `school_waitlist` (
	`id` int AUTO_INCREMENT NOT NULL,
	`schoolName` varchar(255) NOT NULL,
	`country` varchar(100),
	`contactName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`website` varchar(500),
	`coursesOffered` text,
	`financeAvailable` boolean DEFAULT false,
	`interestedInLeads` boolean DEFAULT true,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `school_waitlist_id` PRIMARY KEY(`id`)
);
