import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30%;

    h1 {
        color: blue;
    }
`;

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <Wrapper>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Wrapper>
        </Layout>
    );
};

export const slug = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
