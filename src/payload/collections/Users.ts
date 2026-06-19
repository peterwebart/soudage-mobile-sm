import type { CollectionConfig } from "payload";

/** Admin users for the Payload dashboard (auth-enabled). */
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "Administration",
  },
  fields: [{ name: "name", type: "text" }],
};

export default Users;
