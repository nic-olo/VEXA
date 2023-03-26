import React, { useEffect, useState } from "react";
import BaseCard from "../component/questionCards/BaseCard";
import CheckBoxCard from "../component/questionCards/CheckBoxCard";
import UserResponseCard from "../component/questionCards/UserResponseCard";
import VideoCard from "../component/questionCards/VideoCard";
import YesNoCard from "../component/questionCards/YesNoCard";

export type Video = {
  name: string;
  description: string;
  url: string;
};

export type FeedItem = {
  question: string;
  type: "yesNo" | "checkBox" | "text" | "base" | "userResponse";
  answer?: string;
};

const questions: FeedItem[] = [
  {
    question:
      "Good evening users. Welcome to VEXA. What is your presenting complaint?",
    type: "base",
  },
  { question: "Where is the pain?", type: "text" },
  { question: "When did the pain first start?", type: "text" },
  { question: "How does the pain feel like?", type: "text" },
  {
    question: "Does the pain spread anywhere else? If so, where?",
    type: "text",
  },
  {
    question:
      "On a scale of 0 to 10, how severe is the pain if 0 is being painless and 10 is the worst pain you have ever experienced?",
    type: "text",
  },
  { question: "Are you feeling fevershin?", type: "yesNo" },
  { question: "Do you have yellowing skin?", type: "yesNo" },
  { question: "Are you feeling fatigued?", type: "yesNo" },
  { question: "Are you feeling confused?", type: "yesNo" },
];

export default function Chat() {
  const [myTurn, setMyTurn] = useState(false);
  const [feedItemCounter, setFeedItemCounter] = useState(0);
  const [videos, setVideos] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [displayedFeedItems, setDisplayedFeedItems] = useState<FeedItem[]>([]);

  const [input, setInput] = useState("");

  const addResponse = () => {
    questions[feedItemCounter].answer = input;
    let userResponse: FeedItem = {
      question: input,
      type: "userResponse",
    };
    setDisplayedFeedItems([...displayedFeedItems, userResponse]);
    setInput("");
    setFeedItemCounter((counter) => counter + 1);
    console.log("Incremeting counter");
    setMyTurn(false);
  };

  const mapCard = (question: FeedItem, key: number) => {
    if (question.type === "yesNo") {
      return <YesNoCard key={key} question={question.question} />;
    }

    if (question.type === "checkBox") {
      return <CheckBoxCard key={key} />;
    }

    if (question.type === "text") {
      return <BaseCard key={key} message={question.question} />;
    }

    if (question.type === "userResponse") {
      return <UserResponseCard key={key} message={question.question} />;
    }

    if (question.type === "base") {
      return <BaseCard key={key} message={question.question} />;
    }
  };

  useEffect(() => {
    console.log(displayedFeedItems);
  }, [displayedFeedItems]);

  useEffect(() => {
    if (myTurn) {
      return;
    }

    setTimeout(() => {
      console.log("incrementing counter");
      let question = questions[feedItemCounter];
      setDisplayedFeedItems([...displayedFeedItems, question]);
      if (question.type === "text" || question.type === "yesNo") {
        setMyTurn(true);
      } else {
        setFeedItemCounter((counter) => counter + 1);
        console.log("incremented counter");
      }
    }, 3000);
  }, [feedItemCounter]);

  return (
    <div className="flex flex-col outline w-full">
      <div className="px-3 py-5">
        {displayedFeedItems.map((item, i) => mapCard(item, i))}
      </div>

      <div
        className="flex justify-center
         items-center bg-base-300 px-5 py-3 gap-3 w-full outline"
      >
        <textarea
          rows={1}
          value={input}
          className="textarea textarea-bordered textarea-sm w-full flex-grow outline"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addResponse();
            }
          }}
          disabled={!myTurn}
        ></textarea>
        <button className="btn btn-sm flex-grow-0" disabled={!myTurn}>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
