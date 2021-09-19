
import './Quiz_Test.css';

import React, { useReducer, useState } from 'react';
import Header from './quiz_component/Header';
import Question from './quiz_component/Question';
import QuizContext from './context/QuizContext';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import ReactHtmlParser from 'react-html-parser';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
/* import { useParams } from "react-router-dom"; */

import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
} from './reducers/Const';
import quizReducer from './reducers/QuizReducer';
import { LeakAddTwoTone } from '@material-ui/icons';

const quizData = require.context('./api', true, /\.(json)$/);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eb3b5a',
      contrastText: '#fff'
    }
  }
});

function Quiz() {
  const [total, setTotal] = useState(0);
  console.log(total);

  /* let { id } = useParams(); */
  var jsonFileName = quizData.keys().filter(name => name === `./quiz2.json`)[0];
  const Questions = jsonFileName === undefined ? '' : quizData(jsonFileName);

  const initialState = {
    Questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    correctAnswers: [],
    showResults: false,
    showHomepage: true,
    error: '',
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { correctAnswers, currentQuestion, currentAnswer, answers, showResults, showHomepage } = state;

  const question = Questions[currentQuestion];

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <CheckIcon style={{ color: green[500] }} />;
    }
    return <CloseIcon color="secondary" />;
  };

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = Questions.find(
        question => question.id === answer.questionId
      );

      return (
        <Typography variant="body1" color="inherit" className="Text-Color" key={question.id}>
          {renderResultMark(question, answer)} {ReactHtmlParser(question.question)}
        </Typography>
      );
    });
  };

  const restart = () => {
    setTotal(0)
    dispatch({ type: RESET_QUIZ });
  };

  const next_knowit = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: 'Please select an option(s)' });
      return;
    }

    if (question.correct_answer === currentAnswer) {
      correctAnswers.push(answer);
      setTotal(total+100);
    }
    else if(question.correct_answer !== currentAnswer){
      setTotal(total+0)
    }

    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

    if (currentQuestion + 1 < Questions.length) {
      setTimeout(function () {
        dispatch({
          type: SET_CURRENT_QUESTION,
          currentQuestion: currentQuestion + 1,
        });
      }, 200);

      return;
    }

    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };
    const next_thinkso = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: 'Please select an option(s)' });
      return;
    }

    if (question.correct_answer === currentAnswer) {
      setTotal(total+65);
      correctAnswers.push(answer);
    }
    else if(question.correct_answer !== currentAnswer){
    }
    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

    if (currentQuestion + 1 < Questions.length) {
      setTimeout(function () {
        dispatch({
          type: SET_CURRENT_QUESTION,
          currentQuestion: currentQuestion + 1,
        });
      }, 200);

      return;
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };
  

  const next_maybe = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: 'Please select an option(s)' });
      return;
    }
    //if - else
    if (question.correct_answer === currentAnswer) {
      correctAnswers.push(answer);
    }
    else if(question.correct_answer !== currentAnswer){
    }
    //end if-else
    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

    if (currentQuestion + 1 < Questions.length) {
      setTimeout(function () {
        dispatch({
          type: SET_CURRENT_QUESTION,
          currentQuestion: currentQuestion + 1,
        });
      }, 200);

      return;
    }

    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };
  

    const next_unsure = () => {
    const answer = { questionId: question.id, answer: currentAnswer };

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: 'Please select an option(s)' });
      return;
    }
    //if else
    if (question.correct_answer === currentAnswer) {
      correctAnswers.push(answer);
    }
    else if(question.correct_answer !== currentAnswer){
    }
    //end of if else
    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

    if (currentQuestion + 1 < Questions.length) {
      setTimeout(function () {
        dispatch({
          type: SET_CURRENT_QUESTION,
          currentQuestion: currentQuestion + 1,
        });
      }, 200);

      return;
    }
    /* setPercent(total/(answer.length*100)); */
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };
  

  if (Questions === '') {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <ReportProblemIcon color="primary" className="Report-Problem" />
        <Typography variant="h3" color="inherit" align="center" className="Text-Color">
          Looks like something went wrong
        </Typography>
        <Typography variant="body1" color="primary" align="center">
          Make sure your path param matches json file name
        </Typography>
      </ThemeProvider>
    );
  }
  else if (showHomepage) {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Typography variant="h3" color="inherit" align="center" className="Text-Color">
            Hello, Welcome!<br></br>
              Test your knowledge
            </Typography>
          <Typography variant="h6" color="inherit" align="center" className="Text-Color">
            Quiz - {Questions.length} Questions
            </Typography>
          <Grid container justify="center">
            <Button variant="contained" color="primary" onClick={restart} size="large" disableElevation>
              Start the Quiz!
              </Button>
          </Grid>
        </React.Fragment>
      </ThemeProvider>
    );
  }
  else if (showResults) {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Typography variant="h3" color="inherit" align="center" className="Text-Color">
            You got {((correctAnswers.length / answers.length) * 100).toFixed(1)}%<Typography variant="caption" color="inherit" align="center" className="Text-Color">({correctAnswers.length} of {answers.length})</Typography> of the questions correct!
            Total {total}
            Percent {((total/(answers.length*100))*100).toFixed(1)}
        </Typography>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={8} className="Grid-Item">
              <Typography variant="h6" color="inherit"  className="Text-Color">
                Results
            </Typography>
              <ul>{renderResultsData()}</ul>
            </Grid></Grid>
          <Grid container justify="center">
            <Button className="Space-Bottom" variant="contained" onClick={restart} color="primary" size="large" disableElevation>
              Try Again?
            </Button>
          </Grid>
        </React.Fragment>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <QuizContext.Provider value={{ state, dispatch }}>
          <React.Fragment>
            <Header />
            <Question />
            <Grid container justify="center" mr={2}>
              <Button className="Space-Bottom" variant="contained" onClick={next_knowit} color="primary" size="large" disableElevation>
                I know it
            </Button>
            <Button className="Space-Bottom" variant="contained" onClick={next_thinkso} color="primary" size="large" disableElevation>
                I think so
            </Button>
            <Button className="Space-Bottom" variant="contained" onClick={next_maybe} color="primary" size="large" disableElevation>
                Maybe
            </Button>
            <Button className="Space-Bottom" variant="contained" onClick={next_unsure} color="primary" size="large" disableElevation>
                Unsure
            </Button>
            </Grid>
          </React.Fragment>
        </QuizContext.Provider>
      </ThemeProvider>
    );
  }
}

export default Quiz;