import React from 'react'
import Item from '../Item'
import { getList } from '#/http'
import Toast from '@/Toast'
import PageLoading from '@/PageLoading'
import { RouteComponentProps } from 'react-router-dom'

interface ListProp extends RouteComponentProps {
  part: string
}

const { useState, useEffect } = React
export default function List({ part }: ListProp) {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    fetchList(part)
  }, [part])
  async function fetchList(part: string): Promise<void> {
    try {
      let res = await getList(part)
      setData([...res])
    } catch {
      Toast.info('请求异常')
    }
  }
  return (
    <div className="blog_list">
      {data.length > 0 ? (
        data.map((ele, index) => <Item data={ele} key={index} />)
      ) : (
        <PageLoading />
      )}
    </div>
  )
}
