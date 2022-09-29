import Image from 'next/image'

const style = {
  wrapper: `feed-photo-container flex relative items-center`,
  imageContainer: `feed-photo-images-container w-full relative transition ease-linear duration-200 flex-1 flex h-[500px] w-[500px] m-auto`,
  image: `object-contain`,
}

const PostImage = ({ imgUrl }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image className={style.image} src={imgUrl} layout='fill' />
      </div>
    </div>
  )
}

export default PostImage
