-- ========================================
-- The Grand Kadai Restaurant Database Setup
-- ========================================
-- Run this SQL in your Supabase SQL Editor
-- (Dashboard -> SQL Editor -> New Query)
-- ========================================

-- Drop existing tables if they exist (to start fresh)
DROP TABLE IF EXISTS reservations CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;

-- Create reservations table
CREATE TABLE reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  guests INTEGER NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow public inserts to reservations" ON reservations;
DROP POLICY IF EXISTS "Allow public inserts to contacts" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated users to read reservations" ON reservations;
DROP POLICY IF EXISTS "Allow authenticated users to read contacts" ON contacts;

-- Create policy to allow anyone to insert reservations
CREATE POLICY "Allow public inserts to reservations"
ON reservations
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow anyone to insert contacts
CREATE POLICY "Allow public inserts to contacts"
ON contacts
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to read reservations
-- (Useful if you want to build an admin panel later)
CREATE POLICY "Allow authenticated users to read reservations"
ON reservations
FOR SELECT
TO authenticated
USING (true);

-- Create policy to allow authenticated users to read contacts
-- (Useful if you want to build an admin panel later)
CREATE POLICY "Allow authenticated users to read contacts"
ON contacts
FOR SELECT
TO authenticated
USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reservations_date ON reservations(date);
CREATE INDEX IF NOT EXISTS idx_reservations_created_at ON reservations(created_at);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- ========================================
-- Setup Complete!
-- ========================================
-- Your tables are now ready to receive data
-- from the restaurant website forms.
-- ========================================
