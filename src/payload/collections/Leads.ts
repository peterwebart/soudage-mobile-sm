import type { CollectionConfig } from "payload";

/**
 * Quote-request leads. Mirrors the fields captured by /api/quote so the route
 * can persist directly to Payload once the CMS is activated (phase 2).
 */
export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "company", "service", "urgency", "createdAt"],
    group: "Operations",
  },
  access: {
    // Public site can create leads; reading is restricted to authenticated users.
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "company", type: "text" },
    { name: "phone", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "location", type: "text" },
    { name: "service", type: "text" },
    {
      name: "urgency",
      type: "select",
      defaultValue: "standard",
      options: [
        { label: "Standard", value: "standard" },
        { label: "Priority", value: "priority" },
        { label: "Emergency", value: "emergency" },
      ],
    },
    { name: "message", type: "textarea" },
    {
      name: "locale",
      type: "select",
      defaultValue: "fr",
      options: [
        { label: "Français", value: "fr" },
        { label: "English", value: "en" },
      ],
    },
    {
      name: "attachments",
      type: "array",
      labels: { singular: "Attachment", plural: "Attachments" },
      fields: [{ name: "file", type: "upload", relationTo: "media" }],
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "Quoted", value: "quoted" },
        { label: "Won", value: "won" },
        { label: "Lost", value: "lost" },
      ],
    },
  ],
};

export default Leads;
