-- Migration: 0016_widen_lead_columns
-- Widens varchar columns that were too narrow in the original schema,
-- causing MySQL "Data too long" errors on quiz submission.
-- Also adds missing columns (source, preferredContact) that exist in
-- the Drizzle schema but were never added via migration.

ALTER TABLE `leads`
  MODIFY COLUMN `pilotGoal`        varchar(200),
  MODIFY COLUMN `seriousness`      varchar(200),
  MODIFY COLUMN `spokenToSchool`   varchar(200),
  MODIFY COLUMN `preferredRoute`   varchar(200),
  MODIFY COLUMN `openToAbroad`     varchar(200),
  MODIFY COLUMN `fundingMethod`    varchar(200),
  MODIFY COLUMN `educationLevel`   varchar(200),
  MODIFY COLUMN `class1Medical`    varchar(200),
  MODIFY COLUMN `flyingExperience` varchar(200),
  MODIFY COLUMN `biggestConcern`   varchar(200),
  MODIFY COLUMN `startTimeframe`   varchar(200),
  MODIFY COLUMN `wantsSchoolContact` varchar(20),
  MODIFY COLUMN `wantsFinanceInfo` varchar(100),
  MODIFY COLUMN `rightToWorkStudy` varchar(100);

-- Add columns that exist in schema.ts but were never migrated
ALTER TABLE `leads`
  ADD COLUMN IF NOT EXISTS `source`           varchar(200),
  ADD COLUMN IF NOT EXISTS `preferredContact` varchar(50),
  ADD COLUMN IF NOT EXISTS `contactConsentSchools`  boolean DEFAULT true,
  ADD COLUMN IF NOT EXISTS `contactConsentFinance`  boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS `contactConsentMedical`  boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS `contactConsentPartners` boolean DEFAULT false;
