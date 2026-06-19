import type { CollectionConfig } from "payload";

/**
 * Uploaded media (quote-request attachments: photos, drawings, PDFs).
 * Local disk storage by default; swap in @payloadcms/storage-s3 for object
 * storage in production. See README "Activating the CMS".
 */
export const Media: CollectionConfig = {
  slug: "media",
  admin: { group: "Operations" },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*", "application/pdf", "application/acad", "image/vnd.dwg"],
  },
  fields: [{ name: "alt", type: "text" }],
};

export default Media;
