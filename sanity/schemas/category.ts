import { uuid } from "@sanity/uuid"

export default {
  name: "categories",
  type: "document",
  title: "Categories",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
      initialValue: uuid(),
      readOnly: true,
    },
  ],
}
