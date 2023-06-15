import React from "react"

export interface ICalculator {
    style?: React.CSSProperties
    className?: string
    referral?: {
      fromPartner?: string
      utmSource?: string
    }
}
