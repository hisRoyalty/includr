import React, { useState } from 'react';
import Header from "./Header"

<Header></Header>

const topicsData = [
  // New topics first
  {
    emoji: "🔤",
    title: "Dyslexia",
    intro: "Dyslexia is a common learning difficulty that affects reading, writing, and spelling skills despite normal intelligence.",
    sections: {
      Signs: ["Difficulty reading", "Mixing up letters", "Slow writing"],
      Support: ["Specialized tutoring", "Use of audiobooks", "Extra time in exams"],
      Resources: [
        { label: "Dyslexia support PDF", link: "#" },
        { label: "Reading tools", link: "#" }
      ]
    }
  },
  {
    emoji: "👂",
    title: "Hearing Impairment",
    intro: "Hearing impairment ranges from mild hearing loss to profound deafness, impacting communication and social interaction.",
    sections: {
      Causes: ["Genetics", "Infections", "Noise exposure"],
      Aids: ["Hearing aids", "Sign language", "Cochlear implants"],
      Resources: [
        { label: "Hearing loss factsheet", link: "#" },
        { label: "Sign language guide", link: "#" }
      ]
    }
  },
  {
    emoji: "⚡",
    title: "Bipolar Disorder",
    intro: "Bipolar disorder causes extreme mood swings including emotional highs (mania) and lows (depression).",
    sections: {
      Symptoms: ["Manic episodes", "Depressive episodes", "Mood instability"],
      Treatment: ["Medication", "Therapy", "Lifestyle management"],
      Resources: [
        { label: "Bipolar support group", link: "#" },
        { label: "Mood tracking app", link: "#" }
      ]
    }
  },
  {
    emoji: "🍽️",
    title: "Eating Disorder",
    intro: "Eating disorders involve unhealthy eating habits and can severely affect physical and mental health.",
    sections: {
      Types: ["Anorexia", "Bulimia", "Binge eating"],
      Signs: ["Preoccupation with weight", "Avoiding meals", "Extreme dieting"],
      Support: ["Therapy", "Nutrition counseling", "Support groups"],
      Resources: [
        { label: "Eating disorder helpline", link: "#" },
        { label: "Recovery stories", link: "#" }
      ]
    }
  },
  {
    emoji: "🧠",
    title: "Schizophrenia",
    intro: "Schizophrenia is a serious mental disorder affecting how a person thinks, feels, and behaves, often including hallucinations and delusions.",
    sections: {
      Symptoms: ["Hallucinations", "Delusions", "Disorganized thinking"],
      Treatment: ["Medication", "Psychosocial therapy", "Support services"],
      Resources: [
        { label: "Schizophrenia guide", link: "#" },
        { label: "Community support", link: "#" }
      ]
    }
  },
  // Existing topics follow
  {
    emoji: "😰",
    title: "Anxiety",
    intro: "Anxiety is the body's way of responding to stress or danger. While helpful in small amounts, chronic anxiety can feel overwhelming.",
    sections: {
      Causes: ["School pressure", "Social situations", "Trauma"],
      Coping: ["Breathing techniques", "Journaling", "CBT methods"],
      Tools: [
        { label: "Grounding techniques PDF", link: "#" },
        { label: "Meditation app", link: "#" }
      ]
    }
  },
  {
    emoji: "😞",
    title: "Depression",
    intro: "Depression isn’t just sadness — it's a deep, lasting feeling of hopelessness that affects thoughts and daily life.",
    sections: {
      Signs: ["Withdrawal", "Loss of interest", "Sleep changes"],
      Myths: ["“Just snap out of it”", "“Only adults get it”"],
      Support: ["How to ask for help", "How to support a friend"]
    }
  },
  {
    emoji: "💥",
    title: "Stress",
    intro: "Stress is a natural reaction to challenges. But long-term stress can harm your health and focus.",
    sections: {
      Types: ["Academic", "Social", "Emotional"],
      Relief: ["Time management", "Exercise", "Breaks"],
      Tools: [
        { label: "Study planner", link: "#" },
        { label: "Stress journal template", link: "#" }
      ]
    }
  },
  {
    emoji: "💤",
    title: "Sleep",
    intro: "Sleep fuels your brain, mood, and memory. Teenagers often don’t get enough of it.",
    sections: {
      Tips: ["Screen curfew", "Sleep schedule", "Calming bedtime routine"],
      Stats: ["Teens need 8–10 hours/night"],
      Resources: [
        { label: "Sleep tracker PDF", link: "#" },
        { label: "White noise playlist", link: "#" }
      ]
    }
  },
  {
    emoji: "💗",
    title: "Self-Esteem",
    intro: "Self-esteem is how you view yourself. It shapes your confidence, choices, and relationships.",
    sections: {
      Influences: ["Social media", "Family", "School"],
      Tools: [
        { label: "Affirmation cards", link: "#" },
        { label: "Body positivity video", link: "#" }
      ],
      Activities: ["Write 3 things you like about yourself"]
    }
  },
  {
    emoji: "🤝",
    title: "Relationships",
    intro: "Healthy relationships are built on respect, communication, and boundaries.",
    sections: {
      Topics: ["Friendships", "Dating", "Family"],
      "Red Flags": ["Manipulation", "Control", "Ghosting"],
      Tools: [
        { label: "Boundary setting infographic", link: "#" },
        { label: "Peer support contact", link: "#" }
      ]
    }
  },
  {
    emoji: "📱",
    title: "Digital Wellbeing",
    intro: "Screens are part of our lives—but overuse can harm sleep, mood, and focus.",
    sections: {
      Tips: ["Screen time limits", "Unplug rituals"],
      Topics: ["Cyberbullying", "FOMO", "Digital detox"],
      Resources: [
        { label: "Screen time calculator", link: "#" },
        { label: "Support sites", link: "#" }
      ]
    }
  },
  {
    emoji: "🧩",
    title: "Neurodiversity",
    intro: "Neurodiversity includes conditions like ADHD, autism, and dyslexia. These are natural variations in how people think and learn.",
    sections: {
      Support: ["Learning accommodations", "Quiet spaces"],
      Awareness: ["Celebrate differences", "Reduce stigma"],
      Resources: [
        { label: "ADHD tipsheet", link: "#" },
        { label: "Autism-friendly guides", link: "#" }
      ]
    }
  }
];

const TopicsWithHeader = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <Header />

      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore Topics</h2>

        {topicsData.map((topic, index) => (
          <div key={index} className="mb-4 border rounded-lg shadow-sm bg-white">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-semibold text-lg flex justify-between items-center rounded-t-lg"
            >
              <span>{topic.emoji} {topic.title}</span>
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>

            {activeIndex === index && (
              <div className="px-5 py-4 space-y-4">
                <p className="text-gray-700">{topic.intro}</p>
                {Object.entries(topic.sections).map(([sectionTitle, items]) => (
                  <div key={sectionTitle}>
                    <h3 className="font-semibold text-gray-800 mb-1">{sectionTitle}:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {items.map((item, i) =>
                        typeof item === "string" ? (
                          <li key={i}>{item}</li>
                        ) : (
                          <li key={i}>
                            <a
                              href={item.link}
                              className="text-blue-600 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.label}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default TopicsWithHeader;
