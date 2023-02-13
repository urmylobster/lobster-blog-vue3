import { getPostById } from '@/api/api';

const useGetPostDetail: (() => { [key: string]: any }) = () => {

  const post = ref({})
  const getPostDetail  = async (postData: any) => {
    const res = await getPostById(postData)
    post.value = res
  }

  return {
    post,
    getPostDetail
  }
}

export default useGetPostDetail