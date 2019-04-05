import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import styled from '@emotion/styled'

const ImgContainer = styled.div`
    width: 100px;
`

const HeaderImg = ({alt}) => (
  <StaticQuery
    query={imageQuery}
    render={data => (
      <ImgContainer>
        <Image fixed={data.logo.childImageSharp.fixed} alt={alt}/>
      </ImgContainer>
    )}
  />
)


HeaderImg.propTypes = {
  alt: PropTypes.string,
}

HeaderImg.defaultProps = {
  alt: ``,
}

export default HeaderImg

const imageQuery = graphql`
  query HeaderImageQuery {
    logo:file(relativePath:{ eq: "images/gatsby-icon.png"}) {
      childImageSharp {
        fixed(width:100){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`