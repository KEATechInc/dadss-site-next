import styled from 'styled-components'

// Site color schemes and defaults
export const bgOrange = '#FF9969'
export const darkOrange = '#DA3D1D'
export const fontGray = '#333436'
export const bgGray = '#464646'
export const dtpBlue = '#1E4488'
export const dtpLightBlue = '#117EC2'
export const boxShadow = '0px 2px 4px rgb(0,0,0,0.5)'
export const breakShadow = '0px 1px 2px rgb(0,0,0,0.25)'
export const textShadow = '0px 1px 2px rgb(0,0,0,0.25)'
export const dadssGradientBG = 'rgb(240,153,34)'
export const dadssGradient = 'linear-gradient(90deg, #FF9969 0%, #DA3D1D 90%)'

export const HeadBlock = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 25px;
`
export const Header1 = styled.h1`
	color: ${darkOrange};
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
	letter-spacing: 1.2px;
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
	margin: 20px 0 5px;
	text-align: center;
	text-transform: capitalize;
	letter-spacing: 1.1px;
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
	padding: 25px 25px 50px;
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
	}
`
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
		border: 1.5px solid ${bgOrange};
		border-radius: 10px;
		box-shadow: ${breakShadow};
		&.White {
			color: white;
			background: white;
			border: 1.5px solid white;
		}
		&.DarkOrange {
			color: ${darkOrange};
			background: ${darkOrange};
			border: 1.5px solid ${darkOrange};
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
	margin: 0px 15px;
	box-shadow: ${breakShadow};
	&.White {
		background: white;
	}
	&.DarkOrange {
		background: ${darkOrange};
	}
	&.DTPLightBlue {
		background: ${dtpLightBlue};
	}
`
