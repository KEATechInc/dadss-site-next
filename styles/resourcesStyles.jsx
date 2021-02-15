import styled from 'styled-components'
import { dtpLightBlue } from './generalStyles'

export const ResourcesWrapper = styled.div`
	margin-top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.Link {
		color: inherit;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 100%;
		max-width: 1000px;

		li {
			margin: 10px 0;
		}
	}
	.DivideWrapper {
		display: flex;
		max-width: 1000px;
		.DivideLeft {
			max-width: 700px;
			display: flex;
			flex-direction: column;
			.VABlock {
				border: 5px solid ${dtpLightBlue};
				.VADivider {
					.Toggle {
						display: none;
					}
				}
			}
		}
		.DivideRight {
			width: 300px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			padding: 25px;

			hr {
				max-width: 225px;
			}
			h3 {
				margin-top: 10px;
			}
		}
	}
	@media screen and (max-width: 1000px) {
		.DivideWrapper {
			.DivideLeft {
				max-width: none;
				.VABlock {
					border-left: none;
					border-right: none;
					.VADivider {
						.Toggle {
							display: inline;
						}
					}
				}
			}
			.DivideRight {
				display: none;
			}
		}
	}
`
