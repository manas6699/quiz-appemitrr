// import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { FeaturedCard } from "../components/FeaturedCard";
import Footer from "../components/Footer";
import Loader from "../components/loader";
import Leaderboard from "../components/Leaderboard";

import { useStateContext } from "../context";
const Homepage = () => {
  const { languageList, getLanguages } = useStateContext();
  useEffect(() => {
    getLanguages();

    return () => {};
  });
  return (
    <div className="">
      {/* Hero Section */}
      <section className="container mx-auto">
      <div class="flex flex-wrap">
    <div class="w-full sm:w-8/12 mb-10">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center">
          
          
        </nav>
        <header class="container p-5 lg:flex mt-2 items-center h-full lg:mt-0">
          <div class="w-full p-5">
            <h1 class="text-4xl lg:text-7xl font-bold">Find your <span class="text-blue-700">Quiz</span> for your language</h1>
            <div class="w-20 h-2 bg-blue-900 my-4"></div>
            <p class="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <button class="bg-blue-500 text-white text-2xl font-medium px-4 py-2 rounded-lg shadow">Get Started</button>
          </div>
        </header>
      </div>
    </div>
   </div>
        </section>
      
      {/* Featured Languages */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-medium mt-8">Featured Languages</h2>

        <div className=" mx-4 grid grid-cols-1 gap-4 relative">
          {languageList.length > 0 ? (
            languageList.map((language) => {
              return (

                <FeaturedCard 
                  key={language._id}
                  languageTitle={language.name}
                  body={language.description}
                  link={language.exercises[0]}
                />
              );
            })
          ) : (
            <div className="absolute left-1/2">
              <Loader />
            </div>
          )}
        </div>
      </section>
      {/* Featured Lessons */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-medium mt-8">Featured Lessons</h2>

        <div className="mx-4 grid grid-cols-1 gap-4">
          <FeaturedCard
            languageTitle={"English"}
            link={"6510586a0f7bea7ecb8494ef"}
          />
          <FeaturedCard
            languageTitle={"Spanish"}
            link={"6512c18fd6efe1d0cd6011cb"}
          />
          
        </div>
      </section>
     
      {/* Leaderboard */}
      <section className="container mx-auto">
        
        <Leaderboard />
      </section>
      <section className="max-w-screen-2xl mx-auto rounded-xl">
      <div class="p-4">
    <div
        class="mx-auto flex h-[500px] max-w-[90rem] flex-col justify-center rounded-2xl bg-blue-500 bg-opacity-5 px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 border-blue-500">
        <div class="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black">
        </div>
        <span class="mb-8 text-center text-4xl font-bold">Play Quiz & Learn Languages</span>
        <ul
            class="flex flex-wrap text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm">
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Library Agnostic
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Mutation Observer
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Flexbox Layout
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Full True RTL Support
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Multi Row Slides Layout
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>3D Effects
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Two-way Control
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Full Navigation Control
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Rich API
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Most Flexible Slides Layout Grid
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Parallax Transitions
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Images Lazy Loading
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>Virtual Slides
            </li>
            <li class="my-1 flex w-1/2 items-center">
                <svg class="mr-2 flex-shrink-0 text-blue-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>And many more
            </li>
            <li></li>
        </ul>
    </div>
</div>
      </section>
     
      <Footer />
      <div className="p-5 flex ">
      
    </div>
    </div>
  );
};

export default Homepage;
