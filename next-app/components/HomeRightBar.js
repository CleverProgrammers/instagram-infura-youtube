import Image from 'next/image'
import RightBarSuggestions from './RightBarSuggestions'
import DisplayName from './common/DisplayName'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import truncateEthAddress from 'truncate-eth-address'

const style = {
  wrapper: `suggestions hidden lg:flex lg:flex-col`,
  userInfoContainer: `right-bar-user-info flex items-center`,
  imageContainer: `h-[3rem] w-[3rem] relative rounded-full overflow-hidden cursor-pointer border-white border-2`,
  image: `object-cover`,
}

const HomeRightBar = ({ data }) => {
  const [userAddress, setUserAddress] = useState('')
  const { address } = useAccount()

  useEffect(() => {
    if (address) {
      setUserAddress(truncateEthAddress(address))
    }
  }, [address])

  return (
    <div className={style.wrapper}>
      {data && (
        <>
          <div className={style.userInfoContainer}>
            <div className={style.imageContainer}>
              <Image
                src={`https://avatars.dicebear.com/api/pixel-art/${address}.svg`}
                layout='fill'
                className={style.image}
                alt={0}
              />
            </div>
            <div className='user-info-texts ml-5 flex flex-col'>
              Welcome back,
              <DisplayName
                style={{ paddingBottom: 2, paddingTop: 2 }}
                username={userAddress}
              />
            </div>
          </div>
          <RightBarSuggestions data={data} />
        </>
      )}
    </div>
  )
}

export default HomeRightBar
