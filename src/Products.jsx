import { Routes, Route } from "react-router-dom"
import Presentation from "./products/alphaSeries/2AalphaPro/alpha2A"
import Test from "./test"
function Products() {

  return (
    <Routes>
      <Route path="/alpha2A" element={<Presentation />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  )
}

export default Products
