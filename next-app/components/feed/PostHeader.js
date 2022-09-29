import Image from 'next/image'
import DisplayName from '../common/DisplayName'
import { FiMoreHorizontal } from 'react-icons/fi'

const style = {
  wrapper: `feed-item-header pl-4 pr-4 bg-white flex items-center`,
  profileImageContainer: `relative h-[2rem] w-[2rem] rounded-full overflow-hidden`,
  image: `object-cover`,
  usernameContainer: `feed-item-header-text text-14-bold mr-1 ml-4 cursor-pointer`,
  moreIcon: `ml-auto flex`,
}

const PostHeader = ({ username }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.profileImageContainer}>
        <Image
          src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
          layout='fill'
          alt={username}
          className={style.image}
        />
      </div>

      <DisplayName className={style.usernameContainer} username={username} />

      <button className={style.moreIcon}>
        <FiMoreHorizontal />
      </button>
    </div>
  )
}

export default PostHeader
