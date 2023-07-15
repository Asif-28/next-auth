import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Hero from "@/comp/Hero";
import BlogCards from "@/comp/blogCards/BlogCards";
import Footer from "@/comp/Footer";
import BloggerPosts from "@/comp/blogCards/ApiData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <BlogCards />
        <BloggerPosts />
        <Footer />
      </main>
    </>
  );
}
