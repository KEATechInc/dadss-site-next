import styled from 'styled-components'
import { bgGray, fontGray, boxShadow } from './generalStyles'

const HeroImage = '/assets/drivenToProtect/GreyWash2.jpg'
const HeroImageV = '/assets/drivenToProtect/GreyWash1.jpg'
const HeroImageM = '/assets/drivenToProtect/GreyWash3.jpg'
const BlueImage1 = '/assets/drivenToProtect/Blue-Image1.jpg'
const BlueImage2 = '/assets/drivenToProtect/Blue-Image2.jpg'

export const DrivenToProtectWrapper = styled.div`
	margin-top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.Link {
		color: inherit;
	}
	.HeroImage {
		background: ${bgGray};
		background-image: url(${HeroImage});
		background-repeat: no-repeat;
		background-position: right center;
		background-size: cover;
		height: 30vh;
		width: 100%;
		padding: 0;
		border-bottom: 5px solid ${fontGray};
		.LogoWrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			backdrop-filter: brightness(70%) blur(2px);
			padding: 25px;
		}
	}
	.DirectoryWrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		.Virginia {
			max-width: 525px;
			margin: 0 10px;
			text-align: center;
			margin-bottom: 25px;
			.ImgWrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 275px;
				background-image: url(${BlueImage2});
				background-position: center;
				background-size: cover;
				box-shadow: ${boxShadow};
				cursor: pointer;
				transition: 0.2s;
				h2 {
					transition: 0.2s;
				}
				:hover {
					opacity: 0.9;
					h2 {
						transform: scale(1.1);
					}
				}
			}
		}

		.Maryland {
			max-width: 525px;
			margin: 0 10px;
			text-align: center;
			margin-bottom: 25px;
			.ImgWrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 275px;
				background-image: url(${BlueImage1});
				background-position: center;
				background-size: cover;
				box-shadow: ${boxShadow};
				cursor: pointer;
				transition: 0.2s;
				h2 {
					transition: 0.2s;
				}
				:hover {
					opacity: 0.9;
					h2 {
						transform: scale(1.1);
					}
				}
			}
		}
		a {
			text-transform: capitalize;
		}
	}

	${'' /* Virginia Styles */}
	&.Virginia {
		.HeroImage {
			background-image: url(${HeroImageV});
		}
		.Link {
			color: inherit;
		}
		.VideoContainer {
			position: relative;
			overflow: hidden;
			width: 100%;
			max-width: 1000px;
			padding-top: 56.25%;
			margin-top: 10px;
			iframe {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 100%;
			}
		}
		ul {
			list-style-type: none;
			margin: 0;
			padding: 0;
			width: 100%;
			max-width: 1000px;
			font-size: 1.05rem;
			li {
				margin: 10px 0;
			}
		}
		.DivideWrapper {
			display: flex;
			justify-content: center;
			align-items: top;
			margin: 0;
			max-width: 1000px;
		}
		.ImgWrapper {
			display: none;
		}
		.LogoContainer {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			img {
				height: 100px;
				padding: 25px;
			}
		}

		@media screen and (min-width: 900px) {
			.Content {
				max-width: 700px;
			}
			.ImgWrapper {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
				padding: 35px 25px 25px;
				min-width: 300px;
				height: 825px;
			}
		}
	}

	${'' /* Maryland Styles */}
	&.Maryland {
		.HeroImage {
			background-image: url(${HeroImageM});
		}
		.Link {
			color: inherit;
		}
		ul {
			list-style-type: none;
			width: 100%;
			max-width: 1000px;
			margin: 0;
			padding: 0;
			font-size: 1.05rem;
			li {
				margin: 10px 0;
			}
		}
		.DivideWrapper {
			display: flex;
			justify-content: center;
			align-items: top;
			margin: 0;
			max-width: 1000px;
		}
		.ImgWrapper {
			display: none;
		}
		.LogoContainer {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			img {
				height: 100px;
				padding: 25px;
			}
		}
		@media screen and (min-width: 900px) {
			.Content {
				max-width: 700px;
			}
			.ImgWrapper {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
				padding: 35px 25px 25px;
				min-width: 300px;
				height: 825px;
			}
		}
	}
`
