import theme from '../../src/theme'

const logo = '/assets/logos/dadss-acts.webp'

const ACTS = () => {
  return (
    <a href='https://www.actsautosafety.org/' target='_blank' rel='noreferrer'>
      <img
        src={logo}
        height={65}
        width={135}
        alt='ACTS Logo'
        style={{ margin: theme.spacing(2) }}
      />
    </a>
  )
}

export default ACTS
