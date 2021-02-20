import React, { useState } from 'react'
import { DatePicker } from 'antd'
import { Button, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'

const StyledBlock = Styled.div`
  text-align: center;
`
const StyledP = Styled.div`
  color: white;
  font-size: 18px;
  padding:10px
`

const { RangePicker } = DatePicker
const { Option } = Select
const toURL = ({ searchData }) => {
  var timeSearchData = ''
  var placeSearchData = ''
  var eventSearchData = ''

  if ((searchData.before === '') | (searchData.before === null)) {
    timeSearchData = ''
  } else if (searchData.before === searchData.after) {
    timeSearchData += `IS_SAME(datetime%2C'2021-02-27')`
  } else {
    timeSearchData += `IS_AFTER(datetime%2C'${searchData.before}')%2C+IS_BEFORE(datetime%2C+'${searchData.after}')`
  }

  if ((searchData.place === '') | (searchData.place === null)) {
    placeSearchData = ''
  } else {
    placeSearchData += `%2Ccity%3D'${searchData.place}'`
  }

  if ((searchData.event === '') | (searchData.event === null)) {
    eventSearchData = ''
  } else {
    eventSearchData += `%2CFIND('${searchData.event}'%2C+event)`
  }

  return `filterByFormula=AND(${timeSearchData}${placeSearchData}${eventSearchData})`
}

const SearchBar = () => {
  const history = useHistory()
  const [searchData, setSearchData] = useState({ before: null, after: null, place: null, event: null })

  return (
    <StyledBlock>
      <StyledP>時間及地點必須輸入，活動名稱不一定要輸入</StyledP>
      <Input.Group compact>
        {/* <Space direction="horizontal" size={12}> */}
        <RangePicker
          format="YYYY-MM-DD"
          onChange={(e) => {
            setSearchData({
              ...searchData,
              before: `${e[0]['_d'].getFullYear()}-${e[0]['_d'].getMonth() + 1}-${e[0]['_d'].getDate()}`,
              after: `${e[1]['_d'].getFullYear()}-${e[1]['_d'].getMonth() + 1}-${e[1]['_d'].getDate()}`,
            })
          }}
        />
        <Select
          placeholder="地區"
          style={{ width: '20%' }}
          onChange={(value) => {
            setSearchData({ ...searchData, place: value })
          }}
        >
          <Option value="台中市">台中市</Option>
          <Option value="嘉義市">嘉義市</Option>
          <Option value="高雄市">高雄市</Option>
          <Option value="台北市">台北市</Option>
          <Option value="新北市">新北市</Option>
          <Option value="宜蘭縣">宜蘭縣</Option>
          <Option value="台南市">台南市</Option>
          <Option value="彰化縣">彰化縣</Option>
          <Option value="屏東縣">屏東縣</Option>
          <Option value="桃園市">桃園市</Option>
        </Select>
        <Input
          type="text"
          style={{ width: '20%' }}
          placeholder="搜尋活動名稱"
          onChange={(e) => {
            setSearchData({ ...searchData, event: e.target.value })
          }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={() => {
            console.log('查詢')
            const query = toURL({ searchData })
            history.push({ pathname: '/result', state: { query: query, searchData: searchData } })
          }}
        >
          Search
        </Button>
        {/* </Space> */}
      </Input.Group>
    </StyledBlock>
  )
}

export default SearchBar
