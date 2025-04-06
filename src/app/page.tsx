import Welcome from "@/components/home/welcome/welcome"
import About from "@/components/home/about"
import BestChoice from "@/components/home/best-choice"
import Solutions from "@/components/home/solutions"

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-24 mt-10">
      <Welcome />
      <About />
      <BestChoice />
      <Solutions />
    </div>
  )
}