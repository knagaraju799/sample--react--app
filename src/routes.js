import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  ProjectsSummary,
  DailyDocumentsAddedCount,
  DocumentTypesSummary,
  WeeklyChangeLogs,
} from "./components/Reports";
import { Dashboard, Documents, ProjectDetails } from "./components";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/projects_summary">
          <ProjectsSummary />
        </Route>
        <Route exact path="/daily_documents">
          <DailyDocumentsAddedCount />
        </Route>
        <Route exact path="/document_types">
          <DocumentTypesSummary />
        </Route>
        <Route exact path="/weekly_change_logs">
          <WeeklyChangeLogs />
        </Route>
        <Route exact path="/documents">
          <Documents />
        </Route>
        <Route exact path="/projects" />
        <Route exact path="/project" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
