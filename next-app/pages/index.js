import { data } from '../static/example_data'
import Layout from '../components/Layout'
import Stories from '../components/stories/Stories'
import HomeRightBar from '../components/HomeRightBar'
import FeedItem from '../components/feed/Item'
import { ToastContainer } from 'react-toastify'

const style = {
  container: `homepage-feed lg:mr-8 flex flex-col`,
}

const Home = () => {
  const posts = []

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Layout>
        <div className={style.container}>
          <Stories stories={data.stories} />
          {posts.map((item, index) => (
            <FeedItem data={item} key={index} />
          ))}
        </div>
        <HomeRightBar data={data.suggestions} />
      </Layout>
    </>
  )
}

export default Home
