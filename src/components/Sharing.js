import React from 'react'
import PropTypes from "prop-types"
import { Twitter, Facebook, Mail, Linkedin, Reddit, HackerNews } from 'react-social-sharing'
import styled from '@emotion/styled'

const SharingContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px 0;
    max-width: 500px;
    flex-wrap: wrap;
    background: #f1f1f1;
    border: 1px solid #ccc;
    span {
        margin: 10px;
    }
    a {
        margin: 10px;
    }
`

const Sharing = ({pathName, title, social, siteUrl, author}) => {
    const link = `${siteUrl}/${pathName}`
    const { twitter, linkedin } = social
    return (
        <SharingContainer>
            <span>Share</span>
            <Twitter solid small message={`Check out this post by @${twitter} - ${title}`} link={link}/>
            <Facebook solid small link={link}/>
            <Linkedin solid small message={`Check out this post by @${linkedin} - ${title}`} link={link}/>
            <Reddit solid small link={link}/>
            <HackerNews solid small link={link}/>
            <Mail solid small subject={`Check out this post`} body={`Check out this blog by ${author} entitled ${title} over at ${link}`}/>
        </SharingContainer>
    )
}

Sharing.propTypes = {
    siteUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Sharing;