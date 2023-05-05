export const useClient = () => {
  function createAuthHeader(token: string | null) {
    return {
      Authorization: `Bearer ${token}`
    }
  }

  async function fetch(api: string) {
    const config = useRuntimeConfig()
    const { token } = useAuth()
    if (token == null) {
      return {} as any
    }
    return await useFetch(api, {
      headers: createAuthHeader(token.value),
      baseURL: config.public.API_BASE_URL
    })
  }

  return {
    fetch
  }
}
