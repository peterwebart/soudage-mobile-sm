import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { Leads } from "./collections/Leads";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

/**
 * Payload CMS configuration (PHASE 2).
 *
 * Not wired into the v1 build — see README "Activating the CMS" for the steps
 * to install dependencies, provision PostgreSQL and mount the admin panel.
 * Secrets come from the environment; nothing is hard-coded.
 */

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? "",
  admin: {
    user: Users.slug,
  },
  collections: [Leads, Media, Users],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? "",
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  // Restrict admin/API to the deployed origin when known.
  cors: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL] : "*",
});
