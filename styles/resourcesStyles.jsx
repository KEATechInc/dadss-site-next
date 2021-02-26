import styled from 'styled-components'

export const ResourcesWrapper = styled.div`
	margin-top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.Link {
		color: inherit;
	}
	.DivideWrapper {
		display: flex;
		max-width: 1000px;
		.DivideLeft {
			max-width: 700px;
			display: flex;
			flex-direction: column;
			.VABlock {
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
