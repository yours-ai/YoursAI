import TopTitle from "@/components/themes/chocolate/TopTitle.tsx";
import { TbEdit } from "react-icons/tb";
import MessageListItem from "@/components/themes/chocolate/MessageListItem.tsx";
import { useState } from "react";

export interface Assignment {
  id: number;
  profileImage: string;
  name: string;
  lastMessage: Message;
}

export interface Message {
  profileImage: string;
  name: string;
  message: string;
  time: string;
  role: "assistant" | "user";
}

const assignments: Assignment[] = [
  {
    id: 1,
    profileImage: "/mock/jiah.jpg",
    name: "지아",
    lastMessage: {
      profileImage: "/mock/jiah.jpg",
      name: "지아",
      message: "ㄹㅇㅋㅋㅋㅋ",
      time: "오후 1:00",
      role: "assistant",
    },
  },
  {
    id: 2,
    profileImage: "/mock/kiriko.jpg",
    name: "키리코",
    lastMessage: {
      profileImage: "/mock/kiriko.jpg",
      name: "키리코",
      message: "안녕하살법",
      time: "오후 2:00",
      role: "user",
    },
  },
  {
    id: 3,
    profileImage: "/mock/sena.jpg",
    name: "세나",
    lastMessage: {
      profileImage: "/mock/sena.jpg",
      name: "세나",
      message: "안녕하세요",
      time: "오후 3:00",
      role: "assistant",
    },
  },
  {
    id: 4,
    profileImage: "/mock/yuna.jpg",
    name: "유나",
    lastMessage: {
      profileImage: "/mock/yuna.jpg",
      name: "유나",
      message: "안녕하세용",
      time: "오후 4:00",
      role: "user",
    },
  },
];

export default function MessageList() {
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);
  return (
    <div className="w-full">
      <TopTitle title="메시지" action={<TbEdit className="size-[22px]" />} />
      <div className="flex w-full flex-col justify-center">
        {assignments.map((assignment) => (
          <MessageListItem
            isSelected={assignment === selectedAssignment}
            assignment={assignment}
            onClick={() => {
              setSelectedAssignment(assignment);
            }}
          />
        ))}
      </div>
    </div>
  );
}
