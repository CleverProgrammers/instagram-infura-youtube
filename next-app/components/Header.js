import Image from 'next/image'
import { useRouter } from 'next/router'
import { Uploader } from 'uploader'
import Modal from 'react-modal'

import SearchBar from './SearchBar'
import UploadModal from './UploadModal'

import { modalStyles } from '../utils/constants'

import InstagramLogo from '../static/images/logo.png'
import { GrHomeRounded } from 'react-icons/gr'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { IoPaperPlaneOutline } from 'react-icons/io5'

Modal.setAppElement('#__next')

const uploader = new Uploader({
  apiKey: 'free',
})

const style = {
  wrapper: `navigation fixed z-20 top-0`,
  headerContainer: `header-container`,
  logoContainer: `h-[1.8rem] w-[6.4rem] relative mt-[.6rem]`,
  image: `object-contain`,
  headerMain: `header-icons flex ml-auto items-center`,
  headerIcon: `mr-[.8rem] cursor-pointer`,
}

const Header = () => {
  const router = useRouter()

  const openUploader = () => {
    {
      uploader
        .open({ multi: false })
        .then(files => {
          if (files.length === 0) {
            alert('No files selected.')
          } else {
            router.push(`/?image=${files[0].fileUrl}`)
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  return (
    <nav className={style.wrapper}>
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <Image src={InstagramLogo} className={style.image} layout='fill' />
        </div>

        <SearchBar />

        <div className={style.headerMain}>
          <GrHomeRounded className={style.headerIcon} size={20} />
          <IoPaperPlaneOutline className={style.headerIcon} size={22} />

          <AiOutlineCloudUpload
            className={style.headerIcon}
            size={22}
            onClick={openUploader}
          />
        </div>
      </div>

      <Modal
        isOpen={!!router.query.image}
        onRequestClose={() => router.push('/')}
        style={modalStyles}
      >
        <UploadModal />
      </Modal>
    </nav>
  )
}

export default Header
