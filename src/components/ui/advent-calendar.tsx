"use client";

import { cn, daysInMonth } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Gift, Unlock, Lock } from "lucide-react";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { messages } from "@/lib/db";

type AdventCalendarProps = {
	totalDays: number;
};

const AdventCalendar = ({
	totalDays = daysInMonth({ month: new Date().getMonth() as number }),
}: AdventCalendarProps) => {
	const [devMode, setDevMode] = useState(true);
	const [unlockedDays, setUnlockedDays] = useState<number[]>([]);
	const [isAvailable, setIsAvailable] = useState<boolean[]>([]);
	const currentDate = useMemo(() => new Date().getDate(), []);
	const [selectedDay, setSelectedDay] = useState<number | null>(null);

	const unlockDay = (day: number) => {
		if (day <= currentDate) {
			setUnlockedDays([...unlockedDays, day]);
		}
	};

	useEffect(() => {
		const availability = [...Array(totalDays)].map((_, index) => {
			const day = index + 1;
			return devMode || day <= currentDate;
		});
		setIsAvailable(availability);
	}, [devMode, totalDays, currentDate]);

	const handleDayClick = (day: number) => {
		if (isAvailable[day - 1]) {
			unlockDay(day);
			setSelectedDay(day);
		}
	};

	return (
		<>
			<Switch
				checked={devMode}
				onCheckedChange={setDevMode}
			/>
			<div className='advent-calendar'>
				{[...Array(totalDays)].map((_, index) => {
					const day = index + 1;
					const isUnlocked = unlockedDays.includes(day);
					const isAvailableForDay = isAvailable[day - 1];

					return (
						<AlertDialog key={day}>
							<AlertDialogTrigger asChild>
								<div
									className={cn(
										`border rounded p-2 text-center flex flex-col items-center justify-center aspect-square`,
										isUnlocked ? "bg-green-100" : "bg-gray-100",
										isAvailableForDay
											? "cursor-pointer hover:bg-green-200"
											: "opacity-50"
									)}
									onClick={() => handleDayClick(day)}
								>
									{isUnlocked ? (
										<div>
											<div className='text-xl'>{day}</div>
											<Gift className='mx-auto' />
											<div className='text-sm'>
												{/* {gifts.find((g) => g.day === day)?.content} */}
											</div>
										</div>
									) : (
										<div>
											{isAvailableForDay ? (
												<Unlock className='mx-auto' />
											) : (
												<Lock className='mx-auto' />
											)}
											<div className='text-xl'>{day}</div>
										</div>
									)}
								</div>
							</AlertDialogTrigger>
							{selectedDay === day && (
								<AlertDialogContent>
									<Suspense fallback={<div>Loading...</div>}>
										<Card message={messages[day - 1]} />
									</Suspense>
								</AlertDialogContent>
							)}
						</AlertDialog>
					);
				})}
			</div>
		</>
	);
};

export { AdventCalendar };
