export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userUploadedImagesQuery = (userId) => {
  const query = `*[ _type == 'image' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
  }`;
  return query;
};
