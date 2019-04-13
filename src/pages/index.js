import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO/Seo"
import Bio from "../components/Bio"
// import BlogPostList from "../components/BlogPostList"
import {
  PrimaryHeading,
  SubHeading,
  TertiaryHeading,
} from "../components/Headings"
import LinkContainer from "../components/LinkContainer"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        ogImg: file(relativePath: { eq: "images/og.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    `}
    render={data => {
      const {
        ogImg,
        site: {
          siteMetadata: { title, description, author },
        },
      } = data
      return (
        <Layout>
          <SEO
            title="Home"
            keywords={["gatsby", "blog", "mongodb"]}
            image={{
              src: ogImg.childImageSharp.fluid.src,
              height: "1200",
              width: "630",
              alt: ``, // give relevant
            }}
          />
          <PrimaryHeading style={{ marginBottom: "0" }}>{title}</PrimaryHeading>
          <SubHeading style={{ margin: "5px 0 30px 0" }}>
            {description}
          </SubHeading>
          {/* <TertiaryHeading>Located in ...</TertiaryHeading> */}
          <Bio text={`${author} is awesome`} />
          <TertiaryHeading>Recent Blog Posts</TertiaryHeading>
          {/* <BlogPostList limit={6} /> */}
          <LinkContainer>
            <Link to="/blog/" aria-label="See More Posts">
              See More Posts
            </Link>
          </LinkContainer>
        </Layout>
      )
    }}
  />
)

export default IndexPage
