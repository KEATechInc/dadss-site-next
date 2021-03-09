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
		background: ${bgGray};
		.Discovery {
			padding: 15px 0 25px;
			p {
				max-width: 800px;
				text-align: center;
				padding: 5px 15px;
			}
		}
		.SectionWrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			background: black;
			.QuoteVideoWrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				max-width: 1100px;
				padding: 0;
				background: black;
				.VideoWrapper {
					position: relative;
					overflow: hidden;
					width: 100%;
					padding-top: 56.25%;
					background: black;
					iframe {
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						width: 100%;
						height: 100%;
						z-index: 3;
					}
				}
			}
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
export const Quote = styled.blockquote`
	display: flex;
	flex-direction: column;
	font-size: 1.7rem;
	color: white;
	font-weight: 200;
	width: 100%;
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
