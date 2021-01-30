/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_Setup.svg',
    description: (
      <>
        Economy Tool was designed from the ground up to be easily installed and
        used to get your data up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Economy Tool lets you focus on your matches, and we&apos;ll do the
        chores. Go ahead and see your data in the Economy Tool.
      </>
    ),
  },
  {
    title: 'Overwolf Technology',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Overwolf is a software platform designed to help developers create
        extensions for video games, which are then offered to users through
        Overwolf App Store.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function GetItOnOW() {
  const {isDarkTheme} = useThemeContext();
  const getTheInGameApp = isDarkTheme
    ? 'img/GetItOnOW-Dark.png'
    : 'img/GetItOnOW-Light.png';

  return (
    <div className={styles.buttons}>
      <a
        href="https://download.overwolf.com/install/Download?Name=Economy+Tool&ExtensionId=bpbdciihabfhpbemdkecilbakkallomibgnjhkmm&Channel=ownWebSite"
        target="__blank">
        <img
          className={styles.getTheInGameApp}
          src={getTheInGameApp}
          alt="get the in game app"
        />
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`Overwolf ${siteConfig.title}`}
      description="📈 Control your money like a professional player. | Download From Overwolf.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <GetItOnOW />
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
