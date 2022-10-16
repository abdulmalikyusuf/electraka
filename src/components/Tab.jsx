import { useState } from 'react'
import { Tab } from '@headlessui/react'
import stiPillars from '../data/stiPillars'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ strategicGoal }) {
  let [categories] = useState(stiPillars)
  console.log(categories);

  return (
    <div className="w-full mx-auto">
      <Tab.Group>
        <Tab.List className="flex w-full max-w-md p-1 mx-auto space-x-1 rounded-xl bg-primary/20">
          {Object.keys(categories).map((category) => (
            <Tab key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
				<ul className="list-disc list-inside">
					{posts.map(post => (
						<div key={post.title} className="">
							{post.indicators.map(indicator => (
								<li key={indicator.code} className="flex border-b">
									<span>{indicator.code}</span>
									<span>{indicator.title}</span>
								</li>
							))}
						</div>
					))}
				</ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
