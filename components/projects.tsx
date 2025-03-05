"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "framer-motion"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const projects = [
    {
      id: "project1",
      title: "Project One",
      slug: "project-one",
      image: "/placeholder.svg?height=600&width=800",
      size: "large",
    },
    {
      id: "project2",
      title: "Project Two",
      slug: "project-two",
      image: "/placeholder.svg?height=400&width=600",
      size: "small",
    },
    {
      id: "project3",
      title: "Project Three",
      slug: "project-three",
      image: "/placeholder.svg?height=400&width=600",
      size: "small",
    },
    {
      id: "project4",
      title: "Project Four",
      slug: "project-four",
      image: "/placeholder.svg?height=600&width=800",
      size: "large",
    },
    {
      id: "project5",
      title: "Project Five",
      slug: "project-five",
      image: "/placeholder.svg?height=400&width=600",
      size: "small",
    },
    {
      id: "project6",
      title: "Project Six",
      slug: "project-six",
      image: "/placeholder.svg?height=400&width=600",
      size: "small",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted with attention to detail, performance,
            and user experience.
          </p>
        </div>

        {/* First Row - Big left, two small right */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Large project on left */}
          <div className="md:col-span-7 relative group h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <Link href={`/projects/${projects[0].slug}`}>
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{projects[0].title}</h3>
              </div>
            </Link>
          </div>

          {/* Two small projects on right */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <div className="relative group h-[240px] overflow-hidden rounded-lg">
              <Link href={`/projects/${projects[1].slug}`}>
                <Image
                  src={projects[1].image || "/placeholder.svg"}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{projects[1].title}</h3>
                </div>
              </Link>
            </div>
            <div className="relative group h-[240px] overflow-hidden rounded-lg">
              <Link href={`/projects/${projects[2].slug}`}>
                <Image
                  src={projects[2].image || "/placeholder.svg"}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{projects[2].title}</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Row - Two small left, big right */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Two small projects on left */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4 md:order-1 lg:order-1">
            <div className="relative group h-[240px] overflow-hidden rounded-lg">
              <Link href={`/projects/${projects[4].slug}`}>
                <Image
                  src={projects[4].image || "/placeholder.svg"}
                  alt={projects[4].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{projects[4].title}</h3>
                </div>
              </Link>
            </div>
            <div className="relative group h-[240px] overflow-hidden rounded-lg">
              <Link href={`/projects/${projects[5].slug}`}>
                <Image
                  src={projects[5].image || "/placeholder.svg"}
                  alt={projects[5].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{projects[5].title}</h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Large project on right */}
          <div className="md:col-span-7 relative group h-[400px] md:h-[500px] overflow-hidden rounded-lg md:order-2 lg:order-2">
            <Link href={`/projects/${projects[3].slug}`}>
              <Image
                src={projects[3].image || "/placeholder.svg"}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{projects[3].title}</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

