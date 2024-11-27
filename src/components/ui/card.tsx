"use client";

import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

type CardProps = {
	message: string;
};

const cardVariants = {
	show: {
		opacity: 1,
		translateY: 0,
	},
	hidden: {
		opacity: 0,
		translateY: "100vh",
	},
	initial: "hidden",
};

const Card = ({ message }: CardProps) => {
	const x = useMotionValue(0);

	// useMotionValueEvent(x, "change", (latest) => {
		
	// });

	const handleDragEnd = () => {
		if (Math.abs(x.get()) > 80) {
			x.set(0);
			rotateY.set(180);
			// setIsFlipped((prev) => !prev);
		}
	};

	const rotateY = useTransform(x, [0, 1], [-180, 180]);

	return (
		<motion.div
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			// dragElastic={0.5}
			variants={cardVariants}
			transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
			initial='hidden'
			animate='show'
			className='perspective-1000'	
			style={{ x }}	
			onDragEnd={handleDragEnd}
		>
			<motion.figure
				className='border bg-card text-card-foreground shadow p-8 mx-4'
				style={{ rotateY }}
			>
				<p className='text-lg font-semibold'>{message}</p>
			</motion.figure>
		</motion.div>
	);
};

export { Card };
