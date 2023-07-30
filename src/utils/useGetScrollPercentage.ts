import { RefObject, useState } from "react"

export const useGetScrollPercentage = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = (element: RefObject<HTMLDivElement>) => {
    const targetElement = element?.current
    if (targetElement) {
      const { scrollTop, scrollHeight, clientHeight } = targetElement
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollProgress(progress)
    }
  }
  return { onScroll, scrollProgress }
}
