  import { AdventCalendar, Section } from "@/components/ui";
import { Suspense } from "react";

export default function Home() {
	return (
		<Section>
			<Suspense fallback={<div>Loading...</div>}>
				<AdventCalendar totalDays={25} />
			</Suspense>
		</Section>
	);
}
