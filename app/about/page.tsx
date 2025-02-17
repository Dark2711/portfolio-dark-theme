import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-36 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/116933783?v=4"
            alt="John Doe"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            Hi, I'm Prince Kumar, a passionate Full Stack Developer with over 2 years of experience in creating web
            applications. I specialize in JavaScript technologies across the stack, with a strong focus on React and
            Node.js.
          </p>
          <p className="text-lg mb-4">
            My journey in tech started when I built my first website at the age of 16. Since then, I've been constantly
            learning and adapting to new technologies. I believe in writing clean, efficient code and creating
            user-friendly interfaces that solve real-world problems.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, you can find me playing chess, watching movies and web series, or sketching. I'm always open to new opportunities and collaborations, so feel free to reach out!
          </p>
          <Link href="/#contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

