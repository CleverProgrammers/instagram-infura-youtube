import Router from 'next/router'

const DisplayName = ({ username, ...props }) => {
  return (
    <a
      className='text-14-bold mr-1 cursor-pointer'
      onClick={() => Router.push('/[pid]', `/${username}`)}
      {...props}
    >
      {username || 'Please connect your wallet'}
    </a>
  )
}

export default DisplayName
