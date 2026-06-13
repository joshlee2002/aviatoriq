ALTER TABLE `leads` ADD `preferredContact` varchar(50);--> statement-breakpoint
ALTER TABLE `leads` ADD `contactConsentSchools` boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE `leads` ADD `contactConsentFinance` boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE `leads` ADD `contactConsentMedical` boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE `leads` ADD `contactConsentPartners` boolean DEFAULT false;