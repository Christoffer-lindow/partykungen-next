import Head from "next/head";

const HeadSection = ({ title = "Partyking", children }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Partyking box sizing" />
      <link rel="icon" href="/images/favicon.ico" />
      {children}
    </Head>
  );
};

export default HeadSection;
