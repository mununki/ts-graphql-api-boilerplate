import User from "../../../../entities/User";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../../../../types/graph";
import createJWT from "../../../../utils/createJWT";

const resolvers = {
  Mutation: {
    EmailSignUp: async (_: any, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
      try {
        const { email, password, fullName, nickName } = args;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            error: "This email has signed up already, please sign in",
            ok: false,
            token: null,
            user: null
          };
        }
        if (!password) {
          return {
            error: "Password required",
            ok: false,
            token: null,
            user: null
          };
        }

        const user = new User();
        user.email = email;
        await user.setPassword(password);
        user.fullName = fullName;
        user.nickName = nickName;
        await user.save();

        const token = await createJWT(user.id);
        if (user) {
          const userToString = {
            ...user,
            createdAt: user.createdAt.toString(),
            updatedAt: user.updatedAt.toString()
          };
          return {
            error: null,
            ok: true,
            token,
            user: userToString
          };
        } else {
          return {
            error: "Registering Failed",
            ok: false,
            token: null,
            user: null
          };
        }
      } catch (error) {
        return {
          error: error.message,
          ok: false,
          token: null,
          user: null
        };
      }
    }
  }
};

export default resolvers;
