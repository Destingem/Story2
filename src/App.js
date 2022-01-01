import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './hooks/use-fetch';

function App() {

  const fetch = useFetch({method: "GET"})
  console.log(fetch);
  return (
    <React.Fragment>
      <NewTask onAddTask={fetch.taskAddHandler} />
      <Tasks
        items={fetch.tasks}
        loading={fetch.isLoading}
        error={fetch.error}
        onFetch={fetch.fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
