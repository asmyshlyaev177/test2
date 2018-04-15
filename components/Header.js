import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { Button, Col, Input, Layout, Row } from 'antd'

const Search = Input.Search
const Head = Layout.Header

class Header extends React.Component {

  constructor(props) {
    super(props)  
  }

  render() {
    return (
      <Head style={{ height: 'auto' }}>
        <Row type="flex" justify="space-around" align="middle">
          <Col style={{ textAlign: 'center' }} xs={24} sm={24} md={4} lg={2} xl={2}>
            <Link href="/">
              <Button type="primary">Home</Button>
            </Link>
          </Col>
          <Col style={{ textAlign: 'center' }} xs={24} sm={24} md={16} lg={18} xl={18}>
            <Search enterButton="Search"
              value={this.props.searchString}
              onChange={e => this.props.updateSearch(e.target.value)}
              onSearch={val => this.props.search(val)} />
          </Col>
        </Row>
      </Head>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchString: state.searchString
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: payload => {
      dispatch({type: 'updateSearchString', payload: payload})
    },
    search: payload => {
      dispatch({type: 'loadShows', payload: payload})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
