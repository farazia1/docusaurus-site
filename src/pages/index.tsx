import {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { BookOutlined, ArrowRightOutlined } from '@ant-design/icons';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/humanoid-robotics-book/01-introduction">
                Start Reading <ArrowRightOutlined style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
          <div className={styles.heroBookCover}>
            <div className={styles.bookCoverArt}>
              <BookOutlined style={{ fontSize: '80px', color: 'var(--ifm-color-primary)' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An exploration into Physical AI and Robotics">
      <HomepageHeader />
      <main>
        {/* HomepageFeatures component removed for a cleaner look */}
      </main>
    </Layout>
  );
}
