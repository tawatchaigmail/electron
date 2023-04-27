import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as Check } from './assets/tick.svg'

// some style is hiddden.

//สำหรับตรวจสอบเงื่อนไขของแล้วเปลี่ยนสีข้อความ
const TextColor = styled.div`
  margin-left: 0.5rem;
  color: ${props => {
    const { status } = props
    let color = ''
    if (status === 'true') {
      color = '#5BD2A7'
    } else if (status === 'false') {
      color = '#ff8989'
    } else {
      color = '#8e8e8e'
    }
    return color
  }};
`
//สำหรับตรวจสอบเงื่อนไขเปลี่ยนสี icon
const CheckIcon = styled(Check)`
  fill: #8e8e8e;
  width: 15px;
  fill: ${props => {
    const { status } = props
    let color = ''
    if (status === 'true') {
      color = '#5BD2A7'
    } else if (status === 'false') {
      color = '#ff8989'
    } else {
      color = '#8e8e8e'
    }
    return color
  }};
`
function App() {
  const [password, setPassword] = useState()
  const [isError, setError] = useState()
  const [isLength, setLength] = useState('')
  const [isCaptial, setCapital] = useState('')
  const [isNumber, setNumber] = useState('')
  const [isSpace, setSpace] = useState('')

  useEffect(() => {
    checkPassword(password)
  })

  //ฟังก์ชันสำหรับตรวจสอบ password ว่าตรงกับเงื่อนไขหรือไม่
  const checkPassword = pwd => {
    // some code
  }
  return (
    <Container isError={isError}>
      <Card>
        <FieldLayout>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" maxLength="16" onChange={e => setPassword(e.target.value)} />
        </FieldLayout>
        <Error>{isError && <>This field is required.</>}</Error>
        <Detail>Password must include:</Detail>
        <GridContainer>
          <TextColor>
            <CheckIcon status={isLength} />
          </TextColor>
          <TextColor status={isLength}>8-16 Characters.</TextColor>
          <TextColor>
            <CheckIcon status={isCaptial} />
          </TextColor>
          <TextColor status={isCaptial}>At least 1 capital latter.</TextColor>
          <TextColor>
            <CheckIcon status={isNumber} />
          </TextColor>
          <TextColor status={isNumber}>At least 1 number.</TextColor>
          <TextColor>
            <CheckIcon status={isSpace} />
          </TextColor>
          <TextColor status={isSpace}>No space.</TextColor>
        </GridContainer>
      </Card>
    </Container>
  )
}

export default App
