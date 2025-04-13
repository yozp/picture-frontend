declare namespace API {
  type BaseResponseString_ = {
    code?: number
    data?: string
    message?: string
  }

  type getLoginUsingGETParams = {
    /** roleId */
    roleId: string
    /** userId */
    userId: string
  }

  type getRegExpUsingGETParams = {
    /** regexp1 */
    regexp1: string
  }

  type helloUsingDELETEParams = {
    /** name */
    name?: string
  }

  type helloUsingGETParams = {
    /** name */
    name?: string
  }

  type helloUsingPATCHParams = {
    /** name */
    name?: string
  }

  type helloUsingPOSTParams = {
    /** name */
    name?: string
  }

  type helloUsingPUTParams = {
    /** name */
    name?: string
  }

  type saveUserUsingDELETEParams = {
    age?: number
    name?: string
  }

  type saveUserUsingGETParams = {
    age?: number
    name?: string
  }

  type saveUserUsingPATCHParams = {
    age?: number
    name?: string
  }

  type saveUserUsingPOSTParams = {
    age?: number
    name?: string
  }

  type saveUserUsingPUTParams = {
    age?: number
    name?: string
  }

  type User = {
    age?: number
    name?: string
  }
}
