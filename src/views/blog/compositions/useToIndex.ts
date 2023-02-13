const useToIndex = () => {

  const router = useRouter()

  const toIndex = () => {
    router.replace('/blog')
  }

  return {
    toIndex
  }
}

export default useToIndex