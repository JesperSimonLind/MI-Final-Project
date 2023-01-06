import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  token:
    "skJbrroxrqFQ9hKY45y7YbVum1nNwP3mUFTvWqnhPxD2VNNxl7QJjb4RDjHjmAJteBdhNzHzyI9Tkl9JP41IMgSMcXIX1nqZVo03lb9SHxkaqe9dtFOu9jnmnbCeAkR0eEqgbLyO89dAUd1fQLUPpxKij3ZzsJUmE3ydILDzdUsbA0SYaW0S",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
