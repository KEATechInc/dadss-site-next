import styled from 'styled-components'
import { fontGray } from './generalStyles'

export const OverviewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 85px;
	.Problem {
		padding: 0 25px 50px;
	}
	ul {
		max-width: 1000px;
		li {
			&.White {
				color: white;
			}
			&.Gray {
				color: ${fontGray};
			}
		}
	}
`
