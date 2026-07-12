'use client';

import { useMemo, useState } from 'react';

type Answer = { label: string; value: number };
type Question = { id: string; category: string; prompt: string; answers: Answer[] };

const questions: Question[] = [
  {
    id: 'ontology',
    category: 'Ultimate Reality',
    prompt: 'What best describes your view of ultimate reality?',
    answers: [
      { value: 1, label: 'I am still exploring what may be ultimate or sacred.' },
      { value: 2, label: 'I believe there is a greater source, order, or meaning.' },
      { value: 3, label: 'I believe One God is the originating source of life and truth.' },
      { value: 4, label: 'My life is consistently organized around One God as the highest source.' }
    ]
  },
  {
    id: 'unity',
    category: 'Unity',
    prompt: 'How strongly do you believe humanity is connected by one originating source?',
    answers: [
      { value: 1, label: 'I am uncertain, but open to the idea.' },
      { value: 2, label: 'I sense a shared connection among people.' },
      { value: 3, label: 'I believe all people are related through one source.' },
      { value: 4, label: 'This unity is central to how I understand identity and responsibility.' }
    ]
  },
  {
    id: 'relationship',
    category: 'Relationship',
    prompt: 'How do you relate personally to that source?',
    answers: [
      { value: 1, label: 'I am beginning to ask that question.' },
      { value: 2, label: 'I feel connected through reflection, prayer, nature, or conscience.' },
      { value: 3, label: 'I understand myself as belonging to and resembling One God.' },
      { value: 4, label: 'That relationship consistently guides my decisions and conduct.' }
    ]
  },
  {
    id: 'tradition',
    category: 'Tradition',
    prompt: 'How does your existing tradition or background affect your beliefs?',
    answers: [
      { value: 1, label: 'I do not currently identify with a tradition.' },
      { value: 2, label: 'My background influences me, but I am still defining my beliefs.' },
      { value: 3, label: 'I honor my background while centering unity under One God.' },
      { value: 4, label: 'I can explain how my tradition and OneGodian principles coexist without coercion.' }
    ]
  },
  {
    id: 'identity',
    category: 'Identity',
    prompt: 'How clearly can you describe your spiritual or belief identity today?',
    answers: [
      { value: 1, label: 'I am not ready to name it.' },
      { value: 2, label: 'I have a developing sense of identity.' },
      { value: 3, label: 'I can clearly describe my belief identity and values.' },
      { value: 4, label: 'I actively live, document, and communicate that identity with consistency.' }
    ]
  },
  {
    id: 'community',
    category: 'Community',
    prompt: 'What role should community play in belief and personal development?',
    answers: [
      { value: 1, label: 'I prefer to explore privately for now.' },
      { value: 2, label: 'Supportive community can help learning and reflection.' },
      { value: 3, label: 'Community should strengthen dignity, service, and shared responsibility.' },
      { value: 4, label: 'I am prepared to contribute guidance, continuity, or service to others.' }
    ]
  },
  {
    id: 'purpose',
    category: 'Purpose',
    prompt: 'How strongly do you believe your life has a higher purpose?',
    answers: [
      { value: 1, label: 'I am still searching for purpose.' },
      { value: 2, label: 'I believe my life may have meaning beyond survival.' },
      { value: 3, label: 'I recognize a clear purpose connected to service, growth, or creation.' },
      { value: 4, label: 'I consistently organize my work and responsibilities around that purpose.' }
    ]
  }
];

function getResult(values: Record<string, number>) {
  const scores = Object.values(values);
  const average = scores.length ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;

  if (average < 1.75) {
    return { stage: 'Explorer', internal: 'Seeker', summary: 'You are actively exploring belief, meaning, and identity without needing to force a conclusion.' };
  }
  if (average < 2.75) {
    return { stage: 'Reflector', internal: 'Developing Believer', summary: 'You recognize shared meaning and purpose and are forming a clearer belief identity.' };
  }
  if (average < 3.5) {
    return { stage: 'Aligned', internal: 'Believer', summary: 'Unity, One God, purpose, dignity, and responsibility are important organizing principles in your life.' };
  }
  return { stage: 'Guide', internal: 'Elder Path', summary: 'Your responses show consistent belief alignment and readiness to contribute wisdom, service, or continuity.' };
}

export default function BeliefMapperClient() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [complete, setComplete] = useState(false);

  const current = questions[index];
  const result = useMemo(() => getResult(answers), [answers]);
  const progress = Math.round(((index + 1) / questions.length) * 100);

  function restart() {
    setIndex(0);
    setAnswers({});
    setComplete(false);
  }

  if (complete) {
    return (
      <section className="mapper-panel mapper-result" aria-live="polite">
        <p className="kicker">Your Reflection Result</p>
        <h2>{result.stage}</h2>
        <p className="mapper-internal">Journey reference: {result.internal}</p>
        <p>{result.summary}</p>
        <div className="hero-actions mapper-actions">
          <a className="button primary" href="https://onegodian.org/belief-mapper-resources/">View Resources</a>
          <a className="button secondary" href="https://onegodian.org/belief-mapper-certificate/">Certificate Information</a>
          <button className="button secondary" type="button" onClick={restart}>Retake Mapper</button>
        </div>
      </section>
    );
  }

  return (
    <section className="mapper-panel">
      <div className="mapper-toolbar">
        <div className="mapper-progress-shell" aria-label={`Question ${index + 1} of ${questions.length}`}>
          <div className="mapper-progress"><span style={{ width: `${progress}%` }} /></div>
          <strong>Question {index + 1} of {questions.length}</strong>
        </div>
        <button className="mapper-link" type="button" onClick={restart}>Restart</button>
      </div>

      <p className="kicker">{current.category}</p>
      <h2 className="mapper-question">{current.prompt}</h2>
      <div className="mapper-options" role="radiogroup" aria-label={current.prompt}>
        {current.answers.map((answer) => {
          const selected = answers[current.id] === answer.value;
          return (
            <button
              key={answer.value}
              type="button"
              role="radio"
              aria-checked={selected}
              className={selected ? 'mapper-option selected' : 'mapper-option'}
              onClick={() => setAnswers((previous) => ({ ...previous, [current.id]: answer.value }))}
            >
              {answer.label}
            </button>
          );
        })}
      </div>

      <div className="mapper-navigation">
        <button className="button secondary" type="button" disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))}>Back</button>
        <button
          className="button primary"
          type="button"
          disabled={!answers[current.id]}
          onClick={() => index === questions.length - 1 ? setComplete(true) : setIndex((value) => value + 1)}
        >
          {index === questions.length - 1 ? 'See My Result' : 'Continue'}
        </button>
      </div>
    </section>
  );
}
