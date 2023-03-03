import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Introduction",
    description: (
      <>
        <p>
          DeFi verification platform for SCs tokens and coins using leanprover
          and blockchain DAO build on top of multiversx.
        </p>
        <p>
          We're building a platform to check that digital currencies and other
          financial assets are trustworthy and secure. This platform will use
          advanced math and blockchain technology to make sure that everything
          is working correctly and nobody can cheat the system. In other words,
          the startup is focused on building a platform that verifies the
          security and reliability of decentralized finance (DeFi) assets, such
          as smart contracts, tokens, and coins. The platform will use the Lean
          theorem prover and blockchain technology to ensure that the assets are
          functioning as intended and that there are no vulnerabilities or
          loopholes that could be exploited by bad actors. The use of a
          decentralized autonomous organization (DAO) built on top of MultiversX
          blockchain further emphasizes the focus on security and trust in the
          platform.
        </p>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--md")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
