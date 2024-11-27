import { AdventCalendar } from "@/components/ui";
import { getCalendar } from "@/lib/db";
import { Section } from "@/components/ui";
const CalendarioPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	// const calendar = await getCalendar(id);

	return (
		<Section className='flex flex-col min-h-screen min-w-screen'>
			<div className='flex flex-col flex-grow sm:grid sm:grid-cols-3 self-stretch h-full w-full min-h-full'>
				{/* <h1>{calendar.name}</h1> */}
				<div className='flex flex-col bg-slate-100 sm:col-span-1 sm:p-[5vw] p-6'>
					<h1>{id}</h1>
				</div>

				<div className='flex flex-col p-6 items-center justify-center flex-grow sm:col-span-2'>
					<AdventCalendar totalDays={24} />
				</div>
			</div>
		</Section>
	);
};

export default CalendarioPage;
