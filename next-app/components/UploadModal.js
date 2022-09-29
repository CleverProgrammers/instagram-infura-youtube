import { useState } from 'react'
import { useRouter } from 'next/router'

const style = {
  wrapper: `w-full h-full flex flex-col`,
  title: `text-center text-3xl font-bold mb-11`,
  input: `w-full h-10 border-2 border-gray-300 rounded-md p-2 `,
  button: `flex bg-[#3898ff] text-white font-bold items-center justify-center flex-1 mt-[5rem] rounded-[1rem]`,
}

const UploadModal = () => {
  const router = useRouter()
  const [description, setDescription] = useState('')

  const uploadImage = () => {}

  const handleSubmit = async (
    event,
    imgUrl = router.query.image,
    caption = description,
  ) => {
    event.preventDefault()

    uploadImage(imgUrl, caption)

    router.push('/')
  }

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Enter a Description</h3>
      <input
        type='text'
        value={description}
        onChange={event => setDescription(event.target.value)}
        placeholder='Enter a Description'
        className={style.input}
      />
      <button onClick={handleSubmit} className={style.button}>
        Submit
      </button>
    </div>
  )
}

export default UploadModal
