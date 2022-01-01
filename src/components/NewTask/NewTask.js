import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from "../../hooks/use-fetch"

const NewTask = (props) => {

  const fetch = useFetch({onAddTask: props.onAddTask, method: "POST"})
  console.log(fetch);

  return (
    <Section>
      <TaskForm onEnterTask={fetch.enterTaskHandler} loading={fetch.isLoading} />
      {fetch.error && <p>{fetch.error}</p>}
    </Section>
  );
};

export default NewTask;
