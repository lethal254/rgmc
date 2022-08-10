import { uuid } from "@sanity/uuid"

export default {
  name: "filters",
  type: "document",
  title: "Filters",
  fields: [
    {
      name: "filter",
      title: "Filter",
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
