export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userUploadedImagesQuery = (userId) => {
  const query = `*[ _type == 'userPost' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    createdBy->{
      _id,
      userName,
      image
    }
  }`;
  return query;
};

export const homeQuery = `*[_type == "userPost"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      createdBy->{
        _id,
        userName,
        image
      },
    } `;
