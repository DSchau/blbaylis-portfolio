import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar/Navbar'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Bradley Baylis\'s front end developer portfolio' },
        { name: 'keywords', content: 'Bradley, Baylis, front, end, development, portfolio' },
      ]}>
      <html lang="en" />
    </Helmet>
    <div>
      <Navbar />
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default Layout

const graphql = (literals, ...substitutions) => {
  let result = ''

  // run the loop only for the substitution count
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i]
    result += substitutions[i]
  }

  // add the last literal
  result += literals[literals.length - 1]

  return result
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
