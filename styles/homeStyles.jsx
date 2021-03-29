import styled from 'styled-components'
import { fontGray, bgGray } from './generalStyles'

export const AboutSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: ${fontGray};
	margin-top: 85px;
	.HeroWrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: black;
		}
	}
	.DADSSBlock {
		padding-bottom: 50px;
		.LogoContainer {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			.LogoWrapper {
				padding: 25px;
				cursor: pointer;
			}
		}
	}
	.ContentLogo {
		&.ACTS {
			height: 75px;
			width: 160px;

			:hover {
				cursor: pointer;
			}
		}
		&.NHTSA {
			height: 75px;
			width: 255px;
			margin: 10px;
			:hover {
				cursor: pointer;
			}
		}
	}
	.Tech {
		.BlockWrapper {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			max-width: 1500px;
			.SubWrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				min-width: 325px;
				max-width: 500px;
				width: 50%;
				padding: 15px;
			}
		}
	}
	.ImageWrapper {
		margin: 10px 0 5px;
	}
`
export const Quote = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.7rem;
	color: white;
	font-weight: 200;
	width: 100%;
	max-width: 1000px;
	padding: 25px;
	text-align: center;
	color: ${fontGray};
	p {
		margin: 0;
		line-height: 2.5rem;
	}
	svg {
		padding: 5px;
		font-size: 0.9em;
		color: ${bgGray};
	}
`
