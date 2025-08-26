import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
        <h1 className="text-3xl font-bold text-indigo-300">teszt</h1>
    </div>
  )
}
export default App