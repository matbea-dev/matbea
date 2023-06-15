import React from "react"

export interface ICalculator {
    style?: React.CSSProperties
    className?: string
    referal?: {
      fromPartner?: string
      utmSource?: string
    }
}
