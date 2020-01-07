import React from 'react';

import Head from '../components/Head';
import Layout from '@/components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Head title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;