import Welcome from "@/components/home/welcome/welcome"
import About from "@/components/home/about"
import BestChoice from "@/components/home/best-choice/best-choice"
import Solutions from "@/components/home/solutions/solutions"

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-24 md:mt-10 md:px-10">
      <Welcome />
      <About />
      <BestChoice />
      <Solutions />
    </div>
  )
}