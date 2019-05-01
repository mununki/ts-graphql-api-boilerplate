import User from "../../../../entities/User";
import { ChangePasswordMutationArgs, ChangePasswordResponse } from "../../../../types/graph";
import privateResolver from "../../../../utils/privateResolver";

const resolvers = {
  Mutation: {
    ChangePassword: privateResolver(
      async (_: any, args: ChangePasswordMutationArgs, ctx: any): Promise<ChangePasswordResponse> => {
        const userId: number = ctx.userId;
        const { password } = args;

        try {
          const user = await User.findOne({ id: userId });

          if (user) {
            await user.setPassword(password);

            await user.save();

            const userToString = {
              ...user,
              createdAt: user.createdAt.toString(),
              updatedAt: user.updatedAt.toString()
            };

            return {
              error: null,
              ok: true,
              user: userToString
            };
          } else {
            return {
              error: "User not found",
              ok: false,
              user: null
            };
          }
        } catch (e) {
          return {
            error: e.message,
            ok: false,
            user: null
          };
        }
      }
    )
  }
};

export default resolvers;
