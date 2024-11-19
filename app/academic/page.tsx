'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GraduationCap } from 'lucide-react'
import { subjects } from '@/constants/academic'

export default function BlockPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-md">

      </header>

      <main className="flex-1">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-200 opacity-70 dark:from-indigo-900 dark:to-indigo-800 dark:opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                Your One-Stop Academic Resource Center
              </h1>
              <p className="text-xl mb-8 text-slate-700 dark:text-slate-300">
                Access resources for Physics, Chemistry, Mathematics, and Engineering across two semesters.
              </p>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300">
                Get Started
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900"></div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Our Academic Resources</h2>
            <div className="grid gap-6">
              {subjects.map((subject) => (
                <Card key={subject.name} id={subject.name.toLowerCase()} className="overflow-hidden">
                  <div className={subject.gradient}></div>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <subject.icon className="h-6 w-6" />
                      <span>{subject.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {subject.resources!.map((resource) => (
                        <AccordionItem key={`${subject.name}-${resource.name}`} value={`${subject.name}-${resource.name}`}>
                          <AccordionTrigger>{resource.name}</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                              {resource.contents.map((content) => (
                                <Card key={`${subject.name}-${resource.name}-${content.title}`} className="flex flex-col hover:shadow-md transition-shadow duration-300">
                                  <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                      <content.icon className="h-5 w-5 text-primary" />
                                      <span>{content.title}</span>
                                    </CardTitle>
                                    <CardDescription>{content.description}</CardDescription>
                                  </CardHeader>
                                  <CardFooter className="mt-auto">
                                    <Button asChild className="w-full bg-black hover:bg-gray-800 text-white transition-colors duration-300">
                                      <Link target='_blank' href={content.link}>
                                        View Resources
                                      </Link>
                                    </Button>
                                  </CardFooter>
                                </Card>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold">KMKJStudentHub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}