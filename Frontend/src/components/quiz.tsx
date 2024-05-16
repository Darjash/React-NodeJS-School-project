import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  useTheme,
  useMediaQuery,
  Card,
  TextField,
  MenuItem,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface Question {
  question: string;
  options: string[];
}

export function Quiz() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [group, setGroup] = useState('');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [question, setQuestion] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const currentQuestion = questions[question];
  const [selectedOption, setSelectedOption] = useState('');
  const [finalText, setFinalText] = useState('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();
  const handleAnswerChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const submitResult = () => {
    axios.post('http://localhost:3001/api/insert', {
      groupName: group,
      studentName: name,
      result: score,
  });

  setFinalText(`${t('end')} ${score}/${questions.length}`);
  };
  const checkAnswers = () => {
  axios.post('http://localhost:3001/check-answers', { userAnswers })
    .then((response) => {
        setScore(response.data.correctPoints);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

  const handleNextQuestion = () => {
    const updatedAnswers = [...userAnswers, selectedOption];
    setUserAnswers(updatedAnswers);
    setSelectedOption('');
    setQuestion(question + 1);
  };
  useEffect(() => {
    axios.get('http://localhost:3001/questions')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const renderQuestion = () => {
    if (showQuiz === false) {
      return (
        <Box sx={{ display: 'flex',
      justifyContent: 'center',
      margin: isSmallScreen ? '5px' : '20px',
      marginTop: isSmallScreen ? '15px' : '50px',
      width: isSmallScreen ? '90%' : '1000px', }}
        >
          <Card sx={{
      width: isSmallScreen ? '100%' : '500px',
      padding: isSmallScreen ? '5px' : '20px',
      textAlign: 'center',
      boxShadow: '4', }}
          >
            <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}
            >
              <TextField
                required
                select
                label={t('group')}
                id="outlined-required"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </TextField>
              <TextField
                required
                id="outlined-required"
                label={t('name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                onClick={() => {
              if (name !== '' && group !== '') {
                setShowQuiz(true);
              } else if (name === '' || group === '') {
                setErrorMessage(`${t('quizError')}`);
              }
}}
              >
                <ArrowForwardIcon />
              </Button>
              <Typography sx={{
                height: '24px',
                color: 'red',
                opacity: '0.8'
              }}
              >{errorMessage}
              </Typography>
            </Box>
          </Card>
        </Box>
      );
    }
    if (question === questions.length) {
      checkAnswers();
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          {finalText === '' && (
          <Button
            onClick={submitResult}
          >{t('quitButton')}
          </Button>
)}
          <Typography>{finalText}</Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ width: isSmallScreen ? '100%' : '500px', }}>
        <Box sx={{ width: '100%', textAlign: 'start', padding: isSmallScreen ? '5px' : '20px', }}>
          <FormControl>
            <FormLabel>
              <Typography fontSize="18px">{t(`${currentQuestion.question}`)}</Typography>
            </FormLabel>
            <RadioGroup
              sx={{ marginY: '20px' }}
              value={selectedOption}
              onChange={handleAnswerChange}
            >
              {currentQuestion.options.map((option, index) => (
                <FormControlLabel
                  key={questions[index].question}
                  value={option}
                  control={<Radio />}
                  label={(
                    <Typography sx={{
                    margin: '10px'
                  }}
                    >{t(`${option}`)}
                    </Typography>
)}
                />
            ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Button
          onClick={handleNextQuestion}
          disabled={!selectedOption}
        >
          <ArrowForwardIcon />
        </Button>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: isSmallScreen ? '5px' : '20px',
    marginTop: isSmallScreen ? '15px' : '50px', }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center', width: '90%' }}>
        <Typography variant="h5" sx={{ marginBottom: '26px' }}>
          {t('test')}
        </Typography>
        {renderQuestion()}
      </Box>

    </Box>
  );
}
