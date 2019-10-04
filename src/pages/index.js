import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Home from '../components/Home'

const HomePage = ({data}) => {
  return (
    <Layout>
        <Home title={data.site.siteMetadata.title} description={data.site.siteMetadata.description}/>
    </Layout>
  )
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
export default HomePage