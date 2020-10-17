import React from 'react'
import Banner from '@/Banner'
import Item from '@/Item'
import PageLoading from '@/PageLoading'
import { indexHot } from '#/http'
import './index.scss'
import { RouteComponentProps } from 'react-router-dom'
interface HomeState {
  name: string
  data: any[]
}
export default class Home extends React.PureComponent<
  RouteComponentProps,
  HomeState
> {
  readonly state = {
    name: 'home',
    data: []
  }
  async componentDidMount() {
    let res = await indexHot()
    this.setState({
      data: res
    })
  }
  render() {
    let hideBanner = window.sessionStorage.getItem('hideBanner') || ''
    let { data } = this.state
    return (
      <div className="blog_home">
        {hideBanner ? (
          <>
            {data.length > 0 ? (
              data.map((ele, index) => <Item key={index} data={ele} />)
            ) : (
              <PageLoading />
            )}
          </>
        ) : (
          <Banner />
        )}
      </div>
    )
  }
}
