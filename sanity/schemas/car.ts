import { uuid } from "@sanity/uuid"

export default {
  name: "cars",
  title: "Cars",
  type: "document",
  fields: [
    {
      name: "brand",
      title: "Brand",
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
      name: "forPurchase",
      title: "For purchase",
      type: "boolean",
    },
    {
      name: "forRent",
      title: "For rent",
      type: "boolean",
    },
    {
      name: "buyingPrice",
      type: "number",
      title: "Price",
      hidden: ({ document }) => !document.forPurchase,
    },
    {
      name: "rentingPrice",
      type: "number",
      title: "Price per day",
      hidden: ({ document }) => !document.forRent,
    },
    {
      name: "series",
      type: "string",
      title: "Car series",
    },
    {
      name: "engine",
      type: "string",
      title: "Engine type",
    },

    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "seats",
      type: "number",
      title: "Seats",
    },
    {
      name: "transmission",
      type: "string",
      title: "Transmission type",
    },
    {
      name: "fuelType",
      type: "string",
      title: "Fuel type",
    },
    {
      name: "topSpeed",
      type: "number",
      title: "Top speed in km/hr",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "categories" }],
      title: "Category",
    },
    {
      name: "filter",
      type: "reference",
      to: [{ type: "filters" }],
      title: "Filter",
    },
  ],
}
