import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const HomePage = ({data}) => {
  return (
    <Layout>
        {data.site.siteMetadata.title}
    </Layout>
  )
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default HomePage