-- Drop password-related tables
-- Run this script manually: mysql -u root -p TimeTable < cleanup_password_tables.sql

DROP TABLE IF EXISTS passwords_holder;

DROP TABLE IF EXISTS passwords_holder_seq;

-- Verify tables removed
SHOW TABLES;