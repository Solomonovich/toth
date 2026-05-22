"use client"

import { useEffect } from "react"

export function ScrollReset() {
  useEffect(() => {
    // On mount, scroll to top and clear any hash
    if (window.location.hash) {
      window.scrollTo(0, 0)
      history.replaceState(null, "", window.location.pathname)
    }
  }, [])

  return null
}
