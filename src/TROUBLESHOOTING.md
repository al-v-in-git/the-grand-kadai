# Troubleshooting: "Could not find column" Error

## The Error
```
Could not find the 'name' column of 'contacts' in the schema cache
```

## What This Means
Your Supabase database either:
1. Doesn't have the `contacts` table yet, OR
2. The table was created incorrectly/incompletely

## Solution: Fresh Database Setup

### Step 1: Clear Existing Tables (If Any)
1. Go to **Supabase Dashboard** → **Table Editor**
2. If you see `contacts` or `reservations` tables, check if they have the correct columns
3. If columns are missing or wrong, we'll recreate them

### Step 2: Run the Setup SQL
1. Go to **SQL Editor** in your Supabase Dashboard
2. Click **New Query**
3. Copy and paste **ALL** the code from `supabase-setup.sql`
4. Click **Run** or press `Cmd/Ctrl + Enter`
5. Wait for "Success. No rows returned" message

### Step 3: Verify Tables Were Created
1. Go to **Table Editor**
2. You should see two tables:
   - **contacts** with columns: id, name, email, subject, message, created_at
   - **reservations** with columns: id, name, email, phone, guests, date, time, message, created_at

### Step 4: Verify Policies
1. Click on the `contacts` table
2. Go to **Policies** tab (or **RLS** section)
3. You should see:
   - ✅ "Allow public inserts to contacts" (INSERT for anon role)
   - ✅ "Allow authenticated users to read contacts" (SELECT for authenticated role)
4. Repeat for `reservations` table

### Step 5: Test
1. Go back to your restaurant website
2. Try submitting the contact form
3. The error should be gone!

---

## Still Having Issues?

### Check the Schema Cache
Sometimes Supabase needs to refresh its cache:
1. In **SQL Editor**, run this simple query:
   ```sql
   SELECT * FROM contacts LIMIT 1;
   ```
2. This forces Supabase to reload the table schema
3. Then try your form again

### Verify Column Names
Run this query to see all columns in your contacts table:
```sql
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'contacts';
```

Expected output:
- id | uuid
- name | text
- email | text
- subject | text
- message | text
- created_at | timestamp with time zone

### Check Your Internet Connection
The error might occur if:
- Your Supabase project is paused (free tier auto-pauses after inactivity)
- There's a connectivity issue

Go to your Supabase Dashboard and check if the project status shows "Active"

---

## Quick Checklist
- [ ] Ran the complete SQL setup script
- [ ] Verified both tables exist in Table Editor
- [ ] Verified all columns are present
- [ ] Verified RLS policies are active
- [ ] Project status is "Active"
- [ ] Tested the forms

If you've done all this and still have issues, check the Supabase logs in **Database** → **Logs**
