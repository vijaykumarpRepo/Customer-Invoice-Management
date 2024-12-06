import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace with your DB logic
        const user = { id: 1, name: "User", email: credentials.email };
        if (user) return user;
        return null;
      },
    }),
  ],
  session: { jwt: true },
});
