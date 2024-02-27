import * as React from "react"
import globalVariables from "../../globals"
import WhatsAppButton from "./WhatsAppButton"

const Aside:React.FC = () => {
  return (
    <>
        <WhatsAppButton wpLink={globalVariables.whatsAppApiUrl} />
    </>
  )
}

export default Aside