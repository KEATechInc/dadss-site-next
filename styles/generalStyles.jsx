import styled from 'styled-components'

// Site color schemes and defaults
export const bgOrange = '#FF9969'
export const darkOrange = '#DA3D1D'
export const transDarkOrange = 'rgba(218, 61, 29, .6)'
export const fontGray = '#333436'
export const bgGray = '#464646'
export const transGray = 'rgba(0, 0, 0, 60%)'
export const dtpBlue = '#1E4488'
export const transDtpBlue = 'rgba(30, 68, 136, .6)'
export const dtpLightBlue = '#117EC2'
export const boxShadow = '0px 2px 4px rgb(0,0,0,0.5)'
export const breakShadow = '0px 1px 2px rgb(0,0,0,0.25)'
export const textShadow = '0px 1px 2px rgb(0,0,0,0.25)'
export const dadssGradientBG = 'rgb(240,153,34)'
export const dadssGradient = 'linear-gradient(90deg, #FF9969 0%, #DA3D1D 90%)'

export const PageWrap = styled.div`
	margin-top: 85px;
`
export const HeadBlock = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 25px;
`
export const HeroImage = styled.div`
	background: ${fontGray};
	background-image: url(${(props) => props.landingHero});
	background-repeat: no-repeat;
	background-position: center center;
	background-position: ${(props) => props.position};
	background-size: cover;
	height: 30vh;
	height: ${(props) => props.height};
	width: 100%;
	padding: 0;
`
export const Header1 = styled.h1`
	color: ${darkOrange};
	color: ${(props) => props.color};
	font-weight: 800;
	margin: 20px 0;
	font-size: 2.8rem;
	letter-spacing: 1.2px;
	text-align: center;
	text-transform: capitalize;
	max-width: 1000px;
	&.White {
		color: white;
	}
	&.Gray {
		color: ${fontGray};
	}
	&.Blue {
		color: ${dtpBlue};
	}
`
export const Header2 = styled.h2`
	font-size: 2.2rem;
	text-transform: capitalize;
	margin: 20px 0 5px;
	color: ${darkOrange};
	color: ${(props) => props.color};
	letter-spacing: 1.2px;
	line-height: 2.5rem;
	text-align: center;
	max-width: 1000px;
	&.White {
		color: white;
	}
	&.Gray {
		color: ${fontGray};
	}
	&.Blue {
		color: ${dtpBlue};
	}
`
export const Header3 = styled.h3`
	font-size: 1.5rem;
	color: ${darkOrange};
	color: ${(props) => props.color};
	margin: 20px 0 5px;
	text-align: center;
	text-transform: capitalize;
	letter-spacing: 1.1px;
	line-height: 1.6rem;
	max-width: 1000px;
	&.White {
		color: white;
	}
	&.Gray {
		color: ${fontGray};
	}
	&.Blue {
		color: ${dtpBlue};
	}
`
export const ContentBlock = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: white;
	padding: 50px 25px;
	line-height: 1.5rem;
	ul,
	ol {
		margin: 0;
		padding-left: 30px;
		width: 100%;
		max-width: 1000px;
		li {
			padding: 5px 0;
		}
	}
	&.Orange {
		background: ${bgOrange};
		border-top: 5px solid ${darkOrange};
		border-bottom: 5px solid ${darkOrange};
	}
	&.Gray {
		background: ${bgGray};
		border-top: 5px solid ${fontGray};
		border-bottom: 5px solid ${fontGray};
		color: white;
	}
`
export const ContainerH = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`
export const Sidebar = styled.div`
	display: none;

	@media screen and (min-width: 900px) {
		position: sticky;
		top: 70px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 35px 25px 25px;
		width: 300px;
		height: fit-content;
		h3 {
			margin: 0;
		}
		span > hr {
			max-width: 225px;
		}
		.learnMore {
			margin-top: 10px;
			a {
				display: flex;
				align-items: center;
				svg {
					margin-left: 1px;
				}
			}
		}

		.sidebarCard {
			margin-bottom: 50px;
		}
	}
`
//  video player
export const PlayerContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 400px;
	margin: 25px;
	justify-content: flex-end;
	align-items: center;

	.PlayerWrap {
		position: relative;
		padding-top: 56.25%;
		width: 100%;

		.ReactPlayer {
			position: absolute;
			top: 0;
			left: 0;
			box-shadow: ${boxShadow};
			&.shadowNone {
				box-shadow: none;
			}
		}
	}
	.TitleWrap {
		text-align: center;
	}
`
//

// Content card styles
export const MultiContentBlock = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
	background: ${dadssGradient};
`
export const ContentCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	flex: 1 1 400px;
	padding: 25px;
	margin: 25px;
	background: ${bgGray};
	box-shadow: ${boxShadow};
	color: white;
	p {
		max-width: none;
	}
	ul,
	ol {
		margin: 0;
		padding-left: 30px;
		width: 100%;
		max-width: 1000px;
		li {
			padding: 5px 0;
		}
	}
	.Header {
		font-size: 1.4rem;
		font-weight: bold;
		text-transform: capitalize;
		letter-spacing: 1.1px;
		line-height: 1.6rem;
		margin: 0 0 5px;
		text-align: center;
	}
	hr {
		width: 100%;
		color: ${bgOrange};
		background: ${bgOrange};
		border: 1.5px solid ${bgOrange};
		border-radius: 10px;
		box-shadow: ${breakShadow};
	}
`
//

// Hub card styles
export const HubCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	padding: 25px 0;
`
export const HubCardWrap = styled.div`
	position: relative;
	height: 350px;
	flex: 1 1 350px;
	box-shadow: ${boxShadow};
	cursor: pointer;
	margin: 25px;
	z-index: 1;
`
export const HubCardBack = styled.div`
	height: 350px;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: center;
	opacity: 0.9;
	filter: brightness(0.2);
	z-index: 2;
`
export const HubCardFront = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 350px;
	width: 100%;
	padding: 25px;
	position: absolute;
	top: 0;
	left: 0;
	background: ${transDtpBlue};
	background: ${(props) => props.background};
	z-index: 3;
	transition: 0.2s ease;

	p {
		font-size: 1.4rem;
		letter-spacing: 1.1px;
		line-height: 1.6rem;
		text-align: center;
		text-transform: capitalize;
		color: white;
		transition: 0.2s ease;
	}

	&:hover {
		background: transparent;
		p {
			transform: scale(1.1);
		}
	}
`
//

export const Content = styled.p`
	padding: 10px 0;
	text-align: left;
	max-width: 1000px;
	width: 100%;
	margin: 0;
	font-size: 1rem;
	&.White {
		color: white;
	}
	&.Gray {
		color: ${fontGray};
	}
`
export const Button = styled.button`
	background: ${bgOrange};
	color: ${fontGray};
	padding: 10px 20px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1.2px;
	margin: 15px;
	font-size: 0.9rem;
	border: transparent 3px solid;
	box-shadow: ${boxShadow};
	transition: 0.2s;
	:hover {
		background: ${darkOrange};
		color: white;
		cursor: pointer;
	}
	:focus {
		outline: none;
	}
	&.White {
		background: white;
		color: ${fontGray};
		font-weight: bold;
		:hover {
			border: ${darkOrange} 3px solid;
		}
	}
`
export const Hyperlink = styled.a`
	color: ${darkOrange};
	text-decoration: none;
	font-weight: bold;
	transition: 0.1s;
	:hover {
		cursor: pointer;
		text-decoration: underline;
	}
	&.ContrastOrange {
		color: ${bgOrange};
	}
	&.Gray {
		color: ${fontGray};
	}
	&.Blue {
		color: ${dtpBlue};
	}
`
export const Image = styled.img`
	height: auto;
	max-width: 1000px;
	width: 100%;
	margin: 25px;
`
export const CardWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 1000px;
	margin: 0;
	p {
		color: ${fontGray};
	}
	a {
		text-decoration: none;
	}
	h3 {
		text-align: left;
	}
	.More {
		display: flex;
		align-items: center;
		text-transform: capitalize;
		margin-top: 5px;
		font-weight: 600;
		color: ${darkOrange};
		width: 110px;
		cursor: pointer;
		:hover {
			text-decoration: underline;
		}
	}
	.Category {
		margin-top: 10px;
		margin-bottom: 0px;
		text-transform: capitalize;
		font-weight: 600;
	}
	.Published {
		text-transform: capitalize;
		font-weight: 600;
		margin: 0;
	}
`

// Divider styles
export const Break = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 25px 0;
	hr {
		width: 30vw;
		max-width: 475px;
		color: ${bgOrange};
		background: ${bgOrange};
		background: ${(props) => props.backgroundcolor};
		border: 1.5px solid ${bgOrange};
		border: 1.5px solid ${(props) => props.backgroundcolor};
		border-radius: 10px;
		box-shadow: ${breakShadow};
		&.White {
			color: white;
			background: white;
			border: 1.5px solid white;
		}
		&.DTPLightBlue {
			color: ${dtpLightBlue};
			background: ${dtpLightBlue};
			border: 1.5px solid ${dtpLightBlue};
		}
	}
`
export const Circle = styled.div`
	height: 12px;
	width: 12px;
	border-radius: 50px;
	background: ${bgOrange};
	background: ${(props) => props.backgroundcolor};
	margin: 0px 15px;
	box-shadow: ${breakShadow};
	&.White {
		background: white;
	}
	&.DTPLightBlue {
		background: ${dtpLightBlue};
	}
`
