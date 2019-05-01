import User from "../../../../entities/User";
import { GetMyProfileResponse } from "../../../../types/graph";
import privateResolver from "../../../../utils/privateResolver";

const resolvers = {
  Query: {
    GetMyProfile: privateResolver(
      async (_: any, __: any, ctx: any): Promise<GetMyProfileResponse> => {
        const userId: number = ctx.userId;

        try {
          const profile = await User.findOne({ id: userId });
          if (profile) {
            const userToString = {
              ...profile,
              createdAt: profile.createdAt.toString(),
              updatedAt: profile.updatedAt.toString()
            };
            return {
              error: null,
              ok: true,
              profile: userToString
            };
          } else {
            return {
              error: "User Not Found",
              ok: false,
              profile: null
            };
          }
        } catch (error) {
          return {
            error: error.message,
            ok: false,
            profile: null
          };
        }
      }
    )
  }
};

export default resolvers;
