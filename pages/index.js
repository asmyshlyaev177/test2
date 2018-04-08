import Link from 'next/link'
import MyLayout from '../components/Layout'
import { initStore } from '../store'
import withRedux from '../utils/withRedux'
import { Row, Col, Card } from 'antd'
const { Meta } = Card

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MyLayout>
      {this.props.shows.length
        ? (<h1 style={{ marginTop: '10px', textAlign: 'center'}}>Search Results</h1>)
        : ''}
          <Row gutter={16}>
          {this.props.shows.map(({show}) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={show.id} style={{ marginBottom: '15px'}}>
              <Link as={`/movie/${show.id}`} href={`/movie?id=${show.id}`}>
                <Card title={show.name} hoverable
                 >
                <span>Genre: {show.genres.join(', ')}</span>
                { show.image ? (
                  <img src={show.image.medium} style={{width: '100%', height: 'auto'}} />
                )
                : null }
                </Card>
              </Link>
            </Col>
          ))}
          </Row>
      </MyLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows
  }
}

export default withRedux(initStore, mapStateToProps, null)(Index)
