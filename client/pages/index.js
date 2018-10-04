import Layout from '../index'
import BlogList from '../components/blog-list'
import Wrapper from '../components/wrapper'

import '../asserts/styles.less'

export default () => (
  <Layout>
    <Wrapper>
      <BlogList></BlogList>
    </Wrapper>
  </Layout>
)
