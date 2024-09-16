import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BoardComponent } from "./board/board";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectComponent() {
	return (
		<>
			<BrowserRouter>
				<ProjectDetails />
				<Routes>
					<Route path='*' Component={BoardComponent} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
