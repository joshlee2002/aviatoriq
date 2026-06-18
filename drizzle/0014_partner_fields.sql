-- Migration: 0014_partner_fields
-- Adds partner CRM quality fields to the leads table

ALTER TABLE `leads`
  ADD COLUMN `partnerReady` boolean DEFAULT false,
  ADD COLUMN `partnerFeedback` text,
  ADD COLUMN `lastContacted` timestamp NULL,
  ADD COLUMN `introStatus` enum('None','Intro Sent','School Responded','Meeting Booked','Converted','Declined') DEFAULT 'None';
