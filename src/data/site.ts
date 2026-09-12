export type WidgetStatus = "available" | "testing" | "private";

export type WidgetVisual =
	| {
			type: "calendar";
			accent: string;
			subtitle: string;
			entries: Array<{ time: string; label: string }>;
	  }
	| {
			type: "weather";
			accent: string;
			location: string;
			temperature: string;
			condition: string;
			range: string;
			hours: Array<{ label: string; temp: string }>;
	  }
	| {
			type: "reminders";
			accent: string;
			items: string[];
	  }
	| {
			type: "streaks";
			accent: string;
			items: Array<{ label: string; note: string; value: string }>;
	  }
	| {
			type: "goals";
			accent: string;
			title: string;
			progress: string;
			subtitle: string;
			leftMetric: string;
			rightMetric: string;
	  }
	| {
			type: "countdown";
			accent: string;
			title: string;
			days: string;
			subtitle: string;
	  }
	| {
			type: "environment";
			accent: string;
			metrics: Array<{ label: string; value: string }>;
			location: string;
	  }
	| {
			type: "chart";
			accent: string;
			title: string;
			value: string;
			note: string;
	  }
	| {
			type: "reading";
			accent: string;
			title: string;
			progress: string;
			note: string;
	  }
	| {
			type: "focus";
			accent: string;
			title: string;
			duration: string;
	  };

export interface Widget {
	name: string;
	slug?: string;
	status: WidgetStatus;
	href?: string;
	cta?: string;
	description: string;
	note?: string;
	availabilityLabel?: string;
	image?: {
		src: ImageMetadata;
		alt: string;
	};
	visual: WidgetVisual;
}

export const navItems = [
	{ label: "Widgets", href: "#widgets" },
	{ label: "About Übersicht", href: "#about-ubersicht" },
	{ label: "GitHub", href: "https://github.com/hypeberries" },
];

export const heroCopy = {
	title: "I wanted a desktop that worked the way I do. So I built widgets for Übersicht.",
	highlight: "Then I found Übersicht.",
	paragraphs: [
		"I tried several desktop apps, but none let me arrange information the way I wanted. Then I found Übersicht, a free macOS app that lets web-powered widgets live on the desktop. I started building the small tools I wanted to see every day.",
	],
};

export const personalWidgets: Widget[] = [
	{
		name: "Zwift Goals",
		status: "private",
		description: "Training goals and milestones, visible at a glance.",
		image: {
			src: zwiftGoalsImage,
			alt: "Zwift training goals widget on the desktop",
		},
		visual: {
			type: "goals",
			accent: "magenta",
			title: "Zwift Goals",
			progress: "5,420 / 10,000 km",
			subtitle: "This year",
			leftMetric: "175 W\nFTP",
			rightMetric: "85%\nEverest",
		},
	},
	{
		name: "Baby Countdown",
		status: "private",
		description: "A private countdown for a meaningful date.",
		image: {
			src: babyCountdownImage,
			alt: "Baby milestone widget on the desktop",
		},
		visual: {
			type: "countdown",
			accent: "pink",
			title: "Baby Countdown",
			days: "105",
			subtitle: "days to go\nDue: 2 Sep 2025",
		},
	},
	{
		name: "Environment",
		status: "private",
		description: "Live room conditions powered by the Netatmo API.",
		image: {
			src: environmentImage,
			alt: "Environment widget showing room conditions",
		},
		visual: {
			type: "environment",
			accent: "blue",
			metrics: [
				{ label: "Temperature", value: "21,3°" },
				{ label: "Humidity", value: "48%" },
			],
			location: "Living Room",
		},
	},
	{
		name: "Monthly Deficit",
		status: "private",
		description: "A quick view of my calorie balance.",
		image: {
			src: monthlyDeficitImage,
			alt: "Weekly deficit widget on the desktop",
		},
		visual: {
			type: "chart",
			accent: "violet",
			title: "Monthly Deficit",
			value: "-1.250 kcal",
			note: "Below goal",
		},
	},
	{
		name: "Health Score",
		status: "private",
		description: "A weekly view of movement, activity, and health goals.",
		image: {
			src: healthScoreImage,
			alt: "Health score widget showing weekly activity metrics",
		},
		visual: {
			type: "goals",
			accent: "orange",
			title: "Health Score",
			progress: "37",
			subtitle: "Weekly score",
			leftMetric: "2,166\nactive kcal",
			rightMetric: "2 / 8\ntargets",
		},
	},
];

export const publicWidgets: Widget[] = [
	{
		name: "Calendar",
		slug: "calendar",
		status: "available",
		href: "https://github.com/hypeberries/berries-calendar",
		cta: "View Calendar widget",
		description: "Upcoming events on your desktop, without opening your calendar.",
		image: {
			src: calendarImage,
			alt: "Calendar widget showing upcoming events",
		},
		visual: {
			type: "calendar",
			accent: "violet",
			subtitle: "Tue 20 May",
			entries: [
				{ time: "16:30 - 18:00", label: "Design sync" },
				{ time: "18:30 - 19:00", label: "Gym" },
				{ time: "20:00", label: "Dinner with Steffi" },
			],
		},
	},
	{
		name: "Weather",
		slug: "weather",
		status: "available",
		href: "https://github.com/hypeberries/berries-weather",
		cta: "View Weather widget",
		description: "Current conditions and a short forecast, right on your desktop.",
		image: {
			src: weatherImage,
			alt: "Weather widget showing Stuttgart weather",
		},
		visual: {
			type: "weather",
			accent: "blue",
			location: "Stuttgart",
			temperature: "17°",
			condition: "Mostly Cloudy",
			range: "H: 19°  L: 11°",
			hours: [
				{ label: "10", temp: "17°" },
				{ label: "12", temp: "18°" },
				{ label: "13", temp: "19°" },
				{ label: "14", temp: "19°" },
			],
		},
	},
	{
		name: "Reminders",
		slug: "reminders",
		status: "available",
		href: "https://github.com/hypeberries/berries-reminders",
		cta: "View Reminders widget",
		description: "A focused task list for what needs attention next.",
		image: {
			src: remindersImage,
			alt: "Reminders widget showing a task list",
		},
		visual: {
			type: "reminders",
			accent: "pink",
			items: ["Buy cat food", "Prepare presentation", "Call Mom"],
		},
	},
	{
		name: "Streaks",
		slug: "streaks",
		status: "testing",
		description: "Habit progress that helps keep momentum going.",
		image: {
			src: streaksImage,
			alt: "Streaks widget showing daily habits",
		},
		note: "Currently in testing.",
		availabilityLabel: "In testing",
		visual: {
			type: "streaks",
			accent: "orange",
			items: [
				{ label: "Read", note: "Every day", value: "1" },
				{ label: "Creatinine", note: "Every day", value: "1" },
				{ label: "Workout", note: "Thu workout", value: "1/3" },
				{ label: "Water plants", note: "Every 4 days", value: "1" },
			],
		},
	},
	{
		name: "Reading",
		slug: "reading",
		status: "available",
		cta: "View Reading widget",
		description: "My current read and page progress, always in view.",
		image: {
			src: readingImage,
			alt: "Reading widget showing progress through Wool by Hugh Howey",
		},
		visual: {
			type: "reading",
			accent: "violet",
			title: "Wool",
			progress: "294 / 584 pages",
			note: "Currently reading",
		},
	},
];

export const principles = [
	{
		title: "Web-native",
		description: "Built with HTML, CSS and JavaScript. Make it your own.",
		icon: "code",
	},
	{
		title: "Fits your desktop",
		description: "Place, resize and arrange widgets around how you work.",
		icon: "grid",
	},
	{
		title: "Quiet by default",
		description: "Lightweight enough to live on your desktop.",
		icon: "bolt",
	},
	{
		title: "Open source",
		description: "Powered by Übersicht and its community.",
		icon: "heart",
	},
];

export const steps = [
	{
		number: "01",
		title: "Install Übersicht",
		description: "Download Übersicht for macOS and follow its setup documentation.",
		href: "https://tracesof.net/uebersicht/",
		label: "Download Übersicht",
	},
	{
		number: "02",
		title: "Choose a widget",
		description: "Start with Calendar, Weather, or Reminders, then open its page to see what it does and how to install it.",
	},
	{
		number: "03",
		title: "Add it to your desktop",
		description: "Follow the widget's setup notes and adjust its settings for your routine.",
		href: "https://github.com/hypeberries",
		label: "Browse widgets",
	},
];
import type { ImageMetadata } from "astro";
import babyCountdownImage from "../assets/widgets/baby-countdown.png";
import calendarImage from "../assets/widgets/calendar.png";
import environmentImage from "../assets/widgets/environment.png";
import healthScoreImage from "../assets/widgets/health-score.png";
import monthlyDeficitImage from "../assets/widgets/monthly-deficit.png";
import readingImage from "../assets/widgets/reading.png";
import remindersImage from "../assets/widgets/reminders.png";
import streaksImage from "../assets/widgets/streaks.png";
import weatherImage from "../assets/widgets/weather.png";
import zwiftGoalsImage from "../assets/widgets/zwift-goals.png";
