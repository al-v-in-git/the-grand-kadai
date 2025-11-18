# Supabase Database Setup Instructions

## The Problem
You're seeing this error because Supabase's Row Level Security (RLS) is enabled on your tables, but there are no policies allowing public inserts from your website forms.

## Quick Fix (2 minutes)

### Step 1: Open Supabase SQL Editor
1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Click on **SQL Editor** in the left sidebar
4. Click **New Query**

### Step 2: Run the Setup SQL
1. Open the file `supabase-setup.sql` in this project
2. Copy ALL the SQL code
3. Paste it into the Supabase SQL Editor
4. Click **Run** (or press Cmd/Ctrl + Enter)

### Step 3: Verify
You should see a success message. The script will:
- ✅ Create the `reservations` and `contacts` tables
- ✅ Enable Row Level Security (RLS)
- ✅ Add policies allowing public form submissions
- ✅ Add policies for authenticated admin access
- ✅ Create indexes for better performance

### Step 4: Test Your Forms
- Go back to your restaurant website
- Try submitting a reservation or contact form
- The error should be gone! ✨

---

## What This Does

### Tables Created:
1. **reservations** - Stores table reservation requests
2. **contacts** - Stores general inquiries and contact form submissions

### Security Policies:
- **Public Insert**: Anyone can submit forms (necessary for your website visitors)
- **Authenticated Read**: Only logged-in Supabase users can view submissions (for building an admin panel later)

### Performance:
- Indexes added on date and timestamp fields for faster queries

---

## Alternative: Manual Setup via UI

If you prefer using the Supabase UI instead of SQL:

### For Reservations Table:
1. Go to **Table Editor** → Click **New table**
2. Create `reservations` table with columns as specified in the SQL
3. Go to **Authentication** → **Policies** → Select `reservations`
4. Click **New Policy** → **For full customization**
5. Add policy name: "Allow public inserts"
6. Operation: INSERT
7. Target roles: `anon`
8. WITH CHECK expression: `true`

### For Contacts Table:
Repeat the same process for the `contacts` table.

---

## Need Help?
If you encounter any issues, check the Supabase logs in your dashboard under **Database** → **Logs**
