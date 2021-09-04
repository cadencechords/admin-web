import { Tab } from "@headlessui/react";

export default function Tabs({ tabs, panels }) {
	return (
		<div>
			<Tab.Group>
				<Tab.List>
					{tabs?.map((tab, index) => (
						<Tab
							className={({ selected }) =>
								`font-semibold py-2 px-4 hover:bg-gray-100 focus:bg-gray-100 transition-colors` +
								` ${selected && "border-b-2 border-green-500"}`
							}
							key={index}
						>
							{tab}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-8">
					{panels?.map((panel, index) => (
						<Tab.Panel key={index}>{panel}</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
