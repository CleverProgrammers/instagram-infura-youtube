import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const style = {
  wrapper: `flex`,
  icon: `m-2`,
  tipIcon: `flex align-center cursor-pointer mr-[1rem] mt-[10px]`,
}

const ActionButtons = ({ id }) => {
  const tipOwner = () => {}

  return (
    <div className={style.wrapper}>
      <AiOutlineHeart className={style.icon} size={24} />
      <FaRegComment className={style.icon} size={22} />
      <IoPaperPlaneOutline className={style.icon} size={22} />

      <div className='flex-1' />

      <RiMoneyDollarCircleLine
        size={30}
        className={style.tipIcon}
        onClick={() => tipOwner(id)}
      />
    </div>
  )
}

export default ActionButtons
