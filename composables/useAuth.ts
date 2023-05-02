import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth'

export const useAuth = () => {
  const token = useState<string | null>('token', () => null)

  function signup(email: string, password: string) {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        token.value == (await userCredential.user.getIdToken())
        navigateTo('/')
      })
      .catch((error) => {
        alert(error.message) // TODO エラーメッセージの変更(firebaseというワードを消す)
      })
  }

  function login(email: string, password: string) {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        token.value == (await userCredential.user.getIdToken())
        navigateTo('/')
      })
      .catch((error) => {
        alert(error.message) // TODO エラーメッセージの変更(firebaseというワードを消す)
      })
  }

  async function logout() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth()
      firebaseSignOut(auth)
        .then(() => {
          token.value = null
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      // client only
      if (process.server) return resolve()
      const auth = getAuth()
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken
                resolve()
              })
              .catch(reject)
          } else {
            token.value = null
            resolve()
          }
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  async function isLogin() {
    await checkAuthState()
    return token.value ? true : false
  }

  return {
    signup,
    login,
    logout,
    token,
    checkAuthState,
    isLogin
  }
}
