import React from "react"
import Layout from "../../components/Layout"
import { Link, graphql } from "gatsby"

const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle="My Blog Posts">
            {/* <ul>
                {
                    data.allFile.nodes.map(node => {
                        return <li key={node.name}>{node.name}</li>
                    })
                }
            </ul> */}
            {
                data.allMdx.nodes.map(node => {
                    return (
                        <article key={node.id}>
                            <h2><Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link></h2>
                            <p>Posted: {node.frontmatter.date}</p>
                            
                        </article>
                    )
                })
            }
        </Layout>
    )
}
// page querry
export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                }
                id
                slug
            }
        }
    }
`

export default BlogPage