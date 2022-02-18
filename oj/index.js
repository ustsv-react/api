const mockProblems = [
  {
    id: 'hiwemxz',
    title: 'Problem 1',
    content: '1 == "1"',
    answer: "true"
  },
  {
    id: 'gqwdsse',
    title: 'Problem 2',
    content: 'undefined == null',
    answer: "true"
  },
  {
    id: 'eihn3w8',
    title: 'Problem 3',
    content: 'false == "false"',
    answer: "false"
  },
  {
    id: 'vndw71w',
    title: 'Problem 4',
    content: 'true == "a"',
    answer: "false"
  },
  {
    id: 't7rje8d',
    title: 'Problem 5',
    content: '[] == false',
    answer: "true"
  }
];

const getAllOjProblems = (req, res) => {
  res.status(200).json({
    problems: mockProblems.map(({ id, title }) => ({
      id,
      title
    }))
  });
};

const getOjProblemById = (req, res) => {
  const { problemId } = req.params;
  const problem = mockProblems.find(({ id }) => id === problemId);

  if (!problem) {
    return res.status(404).json({
      error: "Problem ID doesn't exist. Please double check your input."
    });
  };

  return res.status(200).json({
    problem: {
      id: problem.id,
      title: problem.title,
      content: problem.content
    }
  });
};

const checkAnswer = (req, res) => {
  const { params: { problemId }, body: { answer } } = req;
  const problem = mockProblems.find(({ id }) => id === problemId);

  if (!problem) {
    return res.status(404).json({
      error: "Problem ID doesn't exist. Double check your input."
    });
  };

  if (!answer) {
    return res.status(400).json({
      error: "Invalid request, check your request payload."
    });
  }

  return res.status(200).json({
    pass: problem.answer === answer
  });
};

module.exports = {
  getAllOjProblems,
  getOjProblemById,
  checkAnswer,
};
