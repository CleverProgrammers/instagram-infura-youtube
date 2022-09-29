import { useEffect, useState } from 'react'
import Border from '../common/Border'
import PostHeader from './PostHeader'
import ActionButtons from './ActionButtons'
import Caption from './Caption'
import AddComment from '../AddComment'
import PostImage from './PostImage'
import truncateEthAddress from 'truncate-eth-address'

const style = {
  wrapper: `feed-item-container flex flex-col`,
  buttonsContainer: `feed-item-buttons-container w-full h-10 pl-2 pr-2 mt-2 flex items-center`,
  likesContainer: `feed-item-text text-14-bold mr-1 ml-4`,
}

const FeedItem = ({ data }) => {
  const [randomLikeNumber, setRandomLikeNumber] = useState(0)

  useEffect(() => {
    setRandomLikeNumber(Math.floor(Math.random() * 100))
  }, [])

  return (
    <Border className={style.wrapper}>
      <PostHeader username={truncateEthAddress(data.author)} />
      <PostImage imgUrl={data.url} />

      <ActionButtons id={data.id} className={style.buttonsContainer} />

      <a className={style.likesContainer}>{randomLikeNumber} likes</a>

      <Caption
        data={{
          username: truncateEthAddress(data.author),
          caption: data.caption,
        }}
      />

      <AddComment />
    </Border>
  )
}

export default FeedItem
