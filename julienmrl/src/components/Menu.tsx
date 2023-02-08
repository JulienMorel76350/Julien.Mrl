import styled from 'styled-components'
import { motion as m} from "framer-motion";

type MenuProps = {
  }
export const Menu = ({}: MenuProps) => {
    return (
        <m.div
        initial={{ y:"100%"}}
        animate={{ y:"0%"}}
        transition={{ duration: 0.75 }}
        >
            <h1>Menu</h1>
        </m.div>
    )

}
