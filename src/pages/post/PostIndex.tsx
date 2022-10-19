import { useQuery } from 'react-query'
import axios from 'axios'

const fetchPostList = () =>
  axios.get('http://localhost:8008/api/v1/post/').then((data) => data.data)
export default function PostList() {
  const {
    data: postList,
    isLoading,
    isError,
    error,
  } = useQuery('post-list', fetchPostList, {
    cacheTime: 5000,
  })
  console.log(postList)
  if (isLoading)
    return (
      <div className="mt-10 mx-auto animate-spin h-10 w-10 rounded-full border-4 border-blue-500 border-t-transparent shadow duration-150"></div>
    )
  if (isError && error instanceof Error)
    return <h1 className="text-red text-center">{error.message}</h1>
  return (
    <div>
      {postList &&
        !postList.error &&
        postList.data.data.length > 0 &&
        postList.data.data.map((post: any) => {
          return <div key={post.id}>{post.title}</div>
        })}
    </div>
  )
}
