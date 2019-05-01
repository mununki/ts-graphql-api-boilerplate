// User resolver here
// Any field which has a relationship needed to be resolved.

// eg. Posts in User model
// const resolvers = {
//   User: {
//     posts: async (root: any, args: any, ctx: any): Promise<Post[] | null> => {
//       try {
//         const posts = await Post.find({ where: { writer: { id: root.id } } });
//         if (posts.length > 0) {
//           return posts;
//         } else {
//           return null;
//         }
//       } catch (error) {
//         return null;
//       }
//     }
//   }
// };
//
// export default resolvers;
