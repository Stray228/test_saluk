import { Intro } from '../../components'
import Catalog from '../../components/catalog'
import Price from '../../components/price'
import Reviews from '../../components/reviews'
import Shares from '../../components/shares'

const Home = () => {
  return (
    <>
      <Intro />
      <Catalog />
      <Price />
      <Shares />
      <Reviews />
    </>
  )
}

export default Home