import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/ContextData";

export const CoursesCard = () => {
    const { coursesName } = useContext(UserContext)
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="bc9273ce-29bb-4565-959b-714607d4d027"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Choose</span>
            </span>{' '}
            your way. Advance everyday.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Check Out our best courses and make your skilsets more outstanding!
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                {
                    coursesName.map(course => (
                        <div className="flex flex-col transition duration-300 bg-dark rounded shadow-sm hover:shadow">
                        <div className="relative w-full h-48">
                          <img
                            src={course.image}
                            className="object-cover w-full h-full rounded-t"
                            alt="course"
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                          <div>
                                    <div className="text-lg font-semibold">{course.name }</div>
                            <p className="text-sm text-gray-900">
                             {course.description}
                            </p>
                          </div>
                          <NavLink
                            to={`/courses/${course.id}`}
                            className="inline-flex mt-1 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-black hover:text-white focus:shadow-outline focus:outline-none"
                          >
                            View Courses
                          </NavLink>
                        </div>
                      </div>
                    ))
         }
          
        </div>
      </div>
    );
  };