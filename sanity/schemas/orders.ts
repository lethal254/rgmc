import { uuid } from "@sanity/uuid"

export default {
  name: "orders",
  type: "document",
  title: "Orders",
  initialValue: {
    approved: false,
  },
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
      initialValue: uuid(),
      readOnly: true,
    },

    {
      name: "car",
      title: "Car",
      type: "reference",
      to: [{ type: "cars" }],
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "deliveryLocation",
      title: "Delivery Location",
      type: "string",
    },
    {
      name: "deliveryDate",
      title: "Delivery date",
      type: "datetime",
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
    },
  ],
}
