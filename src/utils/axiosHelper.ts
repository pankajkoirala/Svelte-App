// import { logout, saveTokens, tokens } from "@/redux/slice/auth"
// import Axios, { AxiosRequestConfig } from "axios"
// import { useRouter } from "next/navigation"
// import { toast } from "react-hot-toast"
// import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"

// export const AXIOS_INSTANCE = Axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/`,
//   // headers: {
//   //   Authorization:
//   //     typeof window !== "undefined" && localStorage.getItem("accessToken")
//   //       ? localStorage.getItem("accessToken")
//   //       : ``,
//   //   // ${process.env.NEXT_PUBLIC_TOKEN},
//   // },
// })

// export const useAxios = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
//   const { accessToken } = useSelector(tokens)
//   const dispatch = useDispatch()
//   const router = useRouter()
//   return (config: AxiosRequestConfig) => {
//     const UNAUTHORIZED_CODE = 401
//     let _queuedRequest: any[] = []
//     let isFetchingRT = false

//     AXIOS_INSTANCE.interceptors.response.use(
//       (response) => {
//         return response
//       },

//       async function (error) {
//         const originalRequest = error.config

//         if (!originalRequest.url.includes("user/refresh")) {
//           if (
//             error.response.status === UNAUTHORIZED_CODE &&
//             !originalRequest._retry &&
//             !isFetchingRT
//           ) {
//             originalRequest._retry = true
//             originalRequest.isError = false
//             isFetchingRT = true

//             _queuedRequest.push(originalRequest)

//             // getRefreshToken();
//             const result = await AXIOS_INSTANCE.post(
//               `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/refresh`,
//               { refresh_token: localStorage.getItem("refreshToken") }
//             )

//             dispatch(
//               saveTokens({
//                 accessToken: result?.data?.access_token ?? "",
//                 refreshToken: result?.data?.refresh_token ?? "",
//               })
//             )
//             const newAccessToken = localStorage.getItem("accessToken")
//             _queuedRequest.map((v) => {
//               // update token in pending request and call each one of them
//               v.headers.Authorization = "Bearer " + newAccessToken
//             })

//             _queuedRequest = []
//             return await AXIOS_INSTANCE(originalRequest)
//           } else {
//             const errorMessage = error?.response?.data?.message
//             toast.dismiss()
//             toast.error(`${errorMessage ?? "Somethings Went Wrong"}`)
//           }
//         } else {
//           dispatch(logout())
//           router.push("/login")
//         }
//       }
//     )

//     return AXIOS_INSTANCE({
//       ...config,
//       headers: {
//         Authorization: `Bearar ${accessToken}`,
//       },
//       paramsSerializer: (params) => {
//         const serializedParams = Object.entries(params)
//           .map(([key, value]) => {
//             if (Array.isArray(value) && !!value.length) {
//               return value
//                 .map((v) => `${key}=${encodeURIComponent(v)}`)
//                 .join("&")
//             } else if (typeof value === "string") {
//               return `${key}=${encodeURIComponent(value)}`
//             }
//             return null
//           })
//           .filter(Boolean)
//           .join("&")

//         return serializedParams ? serializedParams : ""
//       },
//     })
//       .then(({ data }) => data)
//       .catch((error) => {
//         throw error.message
//       })
//   }
// }

// export default useAxios
