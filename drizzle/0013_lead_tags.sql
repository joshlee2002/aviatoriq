-- Migration: add leadTags column to leads table
-- leadTags stores comma-separated quality tags: school-ready, finance-ready,
-- medical-risk, cadet-suitable, hot, warm, cold
ALTER TABLE `leads` ADD COLUMN `leadTags` varchar(500);
