export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      Title: 'Title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'createdBy',
      title: 'CreatedBy',
      type: 'createdBy',
    },
  ],
}
