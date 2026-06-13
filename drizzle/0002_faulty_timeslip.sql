CREATE TABLE `introduction_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadId` int NOT NULL,
	`schoolId` int NOT NULL,
	`schoolName` varchar(255),
	`status` enum('Pending','Sent','Responded','Declined') NOT NULL DEFAULT 'Pending',
	`sentAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `introduction_requests_id` PRIMARY KEY(`id`)
);
