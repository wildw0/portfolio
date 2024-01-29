import styled from 'styled-components'

import { Props } from '.' //so o ponto pq o arquivo se chama index

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
