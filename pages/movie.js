import React from 'react'
import { initStore } from '../store'
import withRedux from '../utils/withRedux'
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import { Row, Col } from 'antd'

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps(context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
      const show = await res.json()
      const res1 = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
        const episodes = await res1.json()

        return { show, episodes }
      }

  render() {
    return (
      <Layout>
        <Row type="flex" justify="space-around">
          <Col xs={24} sm={8} lg={8} xl={8}>
            <h1 style={{ textAlign: 'center', marginTop: '15px'}}>{this.props.show.name}</h1>
          </Col>
          <Col xs={24} sm={14} lg={14} xl={14}></Col>

          <Col xs={24} sm={8} lg={8} xl={8}>
            { this.props.show.image ? (
              <img src={this.props.show.image.original} style={{width: '100%', height: 'auto'}} />
            )
            : null }
          </Col>
          <Col xs={24} sm={14} lg={14} xl={14}>
            {this.props.show.summary
              ? <div dangerouslySetInnerHTML={{__html: this.props.show.summary}} />
              : ''}
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default withRedux(initStore, null, null)(Post)
