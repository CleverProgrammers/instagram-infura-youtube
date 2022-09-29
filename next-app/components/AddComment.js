import { useState } from 'react'

const style = {
  wrapper: `add-comment-container`,
  inputField: `add-comment-input`,
  shareButton: `text-14-light text-blue`,
}

const AddComment = () => {
  const [isTyped, setTyped] = useState(false)

  return (
    <div className={style.wrapper}>
      <input
        className={style.inputField}
        placeholder='Add Comment...'
        onChange={event => setTyped(event.target.value.length > 0)}
      />
      <button
        className={style.shareButton}
        style={{ opacity: isTyped ? 1 : 0.3 }}
      >
        Share
      </button>
    </div>
  )
}

export default AddComment
