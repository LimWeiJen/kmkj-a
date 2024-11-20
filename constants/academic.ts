import { Atom, Beaker, BookMarked, BookOpen, Bot, Calculator, Clock, Cog, FileQuestion, HelpCircle, Paperclip, Projector, TestTube } from "lucide-react"

export const subjects = [
    { name: 'Physics', icon: Atom, gradient: 'h-2 bg-gradient-to-r from-blue-500 to-purple-500', resources: [
	{
		name: "Semester 1",
		contents: [
    			{ title: 'Previous Year Exams', description: 'Practice with past exam questions', icon: FileQuestion, link: "https://drive.google.com/drive/folders/1A4IBiqn4Na6zzSnSy6rDdZqcSXFgK3O3?usp=sharing" },
    			{ title: 'Practical Test References', description: 'Prepare for practical tests', icon: TestTube, link: "https://drive.google.com/drive/folders/1-YFvY7oYu7XP8Bf6gZb6UPMg_1DtJyQS?usp=sharing" },
    			{ title: 'Tutorial Books', description: 'Explore recommended tutorial books', icon: BookMarked, link: "https://drive.google.com/drive/folders/1NslDf93DuU4Px1FJts-mfqEhuT807cpc?usp=sharing" },
    			{ title: 'Summary', description: 'A short summary for each chapter', icon: Paperclip, link: "https://drive.google.com/drive/folders/1N8pKuDUBZR4d72LQi3ChdOTtTh_yXmtM?usp=sharing" },
		]
	},
	{
		name: "Semester 2",
		contents: [
		]
	},
    ]},
    { name: 'Chemistry', icon: Beaker, gradient:'h-2 bg-gradient-to-r from-emerald-500 to-teal-500', resources: [
	{
		name: "Semester 1",
		contents: [
    			{ title: 'Lecture Notes from Mdm Farhana', description: 'Access comprehensive lecture notes', icon: BookOpen, link: "https://sites.google.com/moe-dl.edu.my/learnchemistry/chemistry-1-ec015/lecture-note?authuser=0" },
    			{ title: 'Previous Year Exams', description: 'Practice with past exam questions', icon: FileQuestion, link: "https://drive.google.com/drive/folders/1lFt5mf_diIyAx0uvj6l7vozMZVjQzTje?usp=sharing" },
    			{ title: 'Practical Test References', description: 'Prepare for practical tests', icon: TestTube, link: "https://drive.google.com/drive/folders/1kwoLYkKbgvFaVs0dT7RBCIhc7_o_A9rr?usp=sharing" },
    			{ title: 'Tutorial Books', description: 'Explore recommended tutorial books', icon: BookMarked, link: "https://drive.google.com/drive/folders/1mVWdzo2Qy4R-t9yOYwGZcKuBz7zGLyzY?usp=sharing" },
    			{ title: 'ChemMatrique (Extra Questions)', description: 'Challenge yourself with additional practice', icon: HelpCircle, link: "https://beacons.ai/chematrique" },
    			{ title: 'Summary', description: 'A short summary for each chapter', icon: Paperclip, link: "https://drive.google.com/drive/folders/1nIHrnQ8FWL_veRrYLQQug9jubacrgbj_?usp=sharing" },
		]
	},
	{
		name: "Semester 2",
		contents: [
		]
	},
    ]},    
    { name: 'Mathematics', icon: Calculator, gradient: 'h-2 bg-gradient-to-r from-emerald-500 to-teal-500', resources: [
	{
		name: "Semester 1",
		contents: [
    			{ title: 'KMKJ Math Bot', description: 'A comprehensive telegram bot full of resources including Tutorial Books, Past Year Exams, Exercises, and Notes', icon: Bot, link: "https://t.me/mas2raSM_bot" },
    			{ title: 'Tutorial Books', description: 'Explore recommended tutorial books', icon: BookMarked, link: "https://drive.google.com/drive/folders/1cLbE_cfTaI_tc5m0_w2lb047CKqdg_lX?usp=sharing" },
    			{ title: 'Summary', description: 'A short summary for each chapter', icon: Paperclip, link: "https://drive.google.com/drive/folders/1cDWwLSe7-RkwyI0fM3o7noL2kk5mU4vv?usp=sharing" },
		]
	},
	{
		name: "Semester 2",
		contents: [
		]
	},
    ]},    
    { name: 'Engineering', icon: Cog, gradient: 'h-2 bg-gradient-to-r from-emerald-500 to-teal-500', resources: [
	{
		name: "Semester 1",
		contents: [
    			{ title: 'Notes', description: 'Access comprehensive notes', icon: BookOpen, link: "https://drive.google.com/drive/folders/1pFvbwiMH8AW178g61Xnp-JSGnXthBTe2?usp=sharing" },
    			{ title: 'Previous Year Exams', description: 'Practice with past exam questions', icon: FileQuestion, link: "https://drive.google.com/drive/folders/1Z2Pu0kkE1VXC4jgQmsAAGo5Y5GsR2uxh?usp=sharing" },
    			{ title: 'Final Year Project Using Autocad', description: 'Step-by-step instructions to install the Autocad modeling software, and sample past year project reports', icon: Projector, link: "https://drive.google.com/drive/folders/1040maWt8xjAan1v1OisqWDl48kj8Un9y?usp=sharing" },
		]
	},
    ]},
    { name: 'Extra', icon: Clock, gradient: 'h-2 bg-gradient-to-r from-emerald-500 to-teal-500', resources: [
	{
		name: "Extra",
		contents: [
    			{ title: 'Spicy Carbonara Bot', description: 'A telegram bot filled with PSPM 1 trial papers', icon: Bot, link: "https://t.me/spicycarbonarabot" },
		]
	},
    ]},
]