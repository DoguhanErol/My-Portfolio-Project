import * as React from "react"
import globalVariables from "../../Config"
import WhatsAppButton from "./WhatsAppButton"

const Aside:React.FC = () => {
  return (
    <>
        <WhatsAppButton wpLink={globalVariables.whatsAppApiUrl} />
    </>
  )
}

export default Aside