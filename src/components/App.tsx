import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './Pages/Contacts.js'
import Price from './Pages/Price.js'
import Page404 from './Pages/Page404.js'
import Politics from "./Pages/Politics"

export default function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Price.element />} />
				<Route path={Contacts.url} element={<Contacts.element />} />
				<Route path={Price.url} element={<Price.element />} />
				<Route path={Politics.url} element={<Politics.element />} />
				<Route path={Page404.url} element={<Page404.element />} />
		   </Routes>
		</BrowserRouter>
	)
}

