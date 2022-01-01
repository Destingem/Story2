import { useImperativeHandle, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const btn = useRef()
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  useEffect(()=> {
    taskInputRef.current.focus()
  }, [])

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button ref={btn}>{props.loading ? 'Sending...' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
