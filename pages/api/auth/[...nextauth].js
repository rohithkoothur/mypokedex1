import NextAuth from "next-auth";
import { providers } from "next-auth/client";
import Providers from "next-auth/providers";

export default NextAuth({
    providers:[
        Providers.GitHub({
            clientId:process.env.GitHub_ID,
            clientSecret:process.env.GitHub_SECRET,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
        
    ],
})