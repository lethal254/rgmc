import sanityClient from "@sanity/client"
export default sanityClient({
  projectId: "5hj4tw8q",
  dataset: "production",
  useCdn: true,
})
