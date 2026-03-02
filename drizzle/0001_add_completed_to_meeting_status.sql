-- Add 'completed' to meeting_status enum if missing
-- Run this if you get: invalid input value for enum meeting_status: "completed"
ALTER TYPE meeting_status ADD VALUE IF NOT EXISTS 'completed';
