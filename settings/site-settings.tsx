import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
	name: "ChawkBazar",
	description:
		"Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
	author: {
		name: "Dil Foods.",
		websiteUrl: "https://dilfoods.in/",
		address: "",
	},
	logo: {
		url: "/assets/images/Dil-Foods-Logo.png",
		alt: "Dil Foods",
		href: "/",
		width: 55,
		height: 60,
	},
	defaultLanguage: "en",
	currencyCode: "USD",
	site_header: {
		menu: [
			{
				id: 5,
				path: "/",
				label: "Home",
			},
			{
				id: 5,
				path: "/order",
				label: "Order",
			},
			{
				id: 5,
				path: "/checkout",
				label: "Checkout",
			}
		],
		mobileMenu: [
			{
				id: 1,
				path: "/",
				label: "menu-demos",
				subMenu: [
					{
						id: 5,
						path: "/",
						label: "Home",
					}, {
						id: 5,
						path: "/order",
						label: "Order",
					},
					{
						id: 5,
						path: "/checkout",
						label: "Checkout",
					},
				],
			}
		],
		languageMenu: [
			{
				id: "ar",
				name: "عربى - AR",
				value: "ar",
				icon: <SAFlag width="20px" height="15px" />,
			},
			{
				id: "zh",
				name: "中国人 - ZH",
				value: "zh",
				icon: <CNFlag width="20px" height="15px" />,
			},
			{
				id: "en",
				name: "English - EN",
				value: "en",
				icon: <USFlag width="20px" height="15px" />,
			},
			{
				id: "de",
				name: "Deutsch - DE",
				value: "de",
				icon: <DEFlag width="20px" height="15px" />,
			},
			{
				id: "he",
				name: "rעברית - HE",
				value: "he",
				icon: <ILFlag width="20px" height="15px" />,
			},
			{
				id: "es",
				name: "Español - ES",
				value: "es",
				icon: <ESFlag width="20px" height="15px" />,
			},
		],
	},
};
