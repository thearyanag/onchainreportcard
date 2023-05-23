import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>My Solana Report Card</title>
        <meta
          name="description"
          content="My Solana Report Card"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
