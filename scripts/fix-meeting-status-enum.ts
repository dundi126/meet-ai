/**
 * Adds 'completed' to the meeting_status enum if missing.
 * Run: npx tsx scripts/fix-meeting-status-enum.ts
 */
import "dotenv/config";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  await sql`ALTER TYPE meeting_status ADD VALUE IF NOT EXISTS 'completed'`;
  console.log("✓ Added 'completed' to meeting_status enum (or it already existed)");
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
