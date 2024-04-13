import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/app/(models)/User";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = "Prov";

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
      scope: "https://www.googleapis.com/auth/user.phonenumbers.read",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials.email }).lean().exec();
      
          if (foundUser) {
            const match = await bcrypt.compare(credentials.password, foundUser.password);
      
            if (match) {
              delete foundUser.password;
              foundUser["role"] = "Cred";
              return foundUser;
            }
          }
        } catch (err) {
          console.log(err);
        }
        return null;
      },      
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.phone = user.phone; // Ajoute le numéro de téléphone au jeton
        token.id = user.id || user._id; 
      }
      return token;
    },
    async session({ session, token }) {
      if (session && token && token.role) {
        session.user.role = token.role;
        session.user.phone = token.phone;
        session.user.id = token.id; // Ajoute l'ID de l'utilisateur à la session
        // Ajoute le numéro de téléphone à la session utilisateur
      }
      return session;
    },
  },
};
