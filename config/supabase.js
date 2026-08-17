import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PRIVATE_KEYS,
);

export const complains = supabase.from("complains");

console.log("Database initialised");
