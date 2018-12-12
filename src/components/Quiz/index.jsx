import React, { Component } from "react";

import {
  Card,
  CardHeader,
  LinearProgress,
  Button,
  CardAction,
  CardActions
} from "@codedojo/mdc-react";
import QuizQuestion from "../QuizQuestion";

export default class Quiz extends Component {
  state = {
    answer: undefined
  };

  handleAnswer = index => {
    this.setState({ answer: index });
  };

  handleNextButtonClick = () => {
    this.setState({ answer: undefined });
    this.props.onAnswer(this.state.answer);
  };

  handleCompleteButtonClick = () => {
    this.setState({ answer: undefined });
    this.props.onComplete();
  };

  render() {
    const {
      question,
      questionPosition,
      progress,
      numberOfQuestions,
      hasNextQuestion
    } = this.props;
    const { answer } = this.state;
    return (
      <Card>
        <CardHeader
          title="Тест Javascript"
          subtitle={
            hasNextQuestion &&
            `Вопрос ${questionPosition} из ${numberOfQuestions}`
          }
        />
        <LinearProgress value={progress} />

        {question && (
          <QuizQuestion
            question={question}
            answer={answer}
            onAnswer={this.handleAnswer}
          />
        )}

        <CardActions>
          <CardAction>
            {hasNextQuestion ? (
              <Button onClick={this.handleNextButtonClick}>Далее</Button>
            ) : (
              <Button onClick={this.handleCompleteButtonClick}>
                Завершить
              </Button>
            )}
          </CardAction>
        </CardActions>
      </Card>
    );
  }
}
