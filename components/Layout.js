import stylesheet from 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import Header from '../components/Header'

const MyLayout = (props) => (
  <Layout className="layout">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header />
    {props.children}
    <style jsx global>{`
      .layout {
        margin: 20px;
        padding: 20px;
        border: 1px solid #DDD;
      } 
    `}</style>
  </Layout>
)

export default MyLayout
