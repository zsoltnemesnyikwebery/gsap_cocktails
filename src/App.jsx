import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className="min-h-[200vh]">
      <Navbar />
    </main>
  )
}
export default App